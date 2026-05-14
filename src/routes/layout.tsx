import { $, Slot, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Link, type RequestHandler, useLocation } from '@builder.io/qwik-city';

import Lenis from 'lenis';
import Logo from '~/logo.svg?jsx';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export const DecryptText = component$(({ content }: { content: string }) => {
  const chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=_+[]{}|\\;:\'",.<>?/`~'.split(
      '',
    );

  const decryptDuration = 2000 as const;

  const decrypting = useSignal(false);
  const encrypted = useSignal(content);

  return (
    <span
      onMouseOver$={() => {
        decrypting.value = true;

        let text = content
          .split('')
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join('');

        let progress = 0;
        let lastTime: number;

        const decrypt = (time: number) => {
          if (text === content || !decrypting.value) {
            decrypting.value = false;
            return;
          }

          if (!lastTime) {
            lastTime = time;
          }

          progress += time - lastTime;

          text = content
            .split('')
            .map((char, index) => {
              if (Math.random() < progress / decryptDuration) {
                return char;
              }

              if (Math.random() < 0.1) {
                return chars[Math.floor(Math.random() * chars.length)];
              }

              return text[index];
            })
            .join('');

          encrypted.value = text;

          lastTime = time;

          if (progress < decryptDuration) {
            requestAnimationFrame(decrypt);
          }
        };

        requestAnimationFrame(decrypt);
      }}
      onMouseOut$={() => {
        decrypting.value = false;
      }}
    >
      {decrypting.value ? encrypted.value : content}
    </span>
  );
});

export default component$(() => {
  const pages = [
    {
      name: 'robots',
      url: '/robots',
      blank: false,
    },
    {
      name: 'members',
      url: '/members',
      blank: false,
    },
    {
      name: 'matches',
      url: 'https://ftcscout.org/teams/15534',
      blank: true,
    },
    {
      name: 'contact',
      url: 'mailto:vertex15534@gmail.com',
      blank: true,
    },
  ] as const;

  const robotSeasons = [
    {
      name: 'Into the Deep',
      season: '2024-2025',
      url: '/robots#into-the-deep',
    },
    {
      name: 'Centerstage',
      season: '2023-2024',
      url: '/robots#centerstage',
    },
    {
      name: 'PowerPlay',
      season: '2022-2023',
      url: '/robots#powerplay',
    },
  ] as const;

  const location = useLocation();
  const handleSeasonKeydown = $((event: KeyboardEvent) => {
    const container = event.currentTarget as HTMLElement;
    const links = Array.from(
      container.querySelectorAll<HTMLAnchorElement>('[data-season-link]'),
    );
    if (links.length === 0) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      container
        .querySelector<HTMLAnchorElement>('[data-robots-trigger]')
        ?.focus();
      return;
    }

    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
      return;
    }

    event.preventDefault();

    const activeElement = document.activeElement as HTMLAnchorElement | null;
    const currentIndex = activeElement ? links.indexOf(activeElement) : -1;
    const delta = event.key === 'ArrowDown' ? 1 : -1;
    const nextIndex =
      currentIndex === -1
        ? 0
        : (currentIndex + delta + links.length) % links.length;
    links[nextIndex]?.focus();
  });

  useVisibleTask$(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div class="min-h-screen flex flex-col relative">
      <header class="fixed z-10 w-[calc(100%-32px)] rounded-[12px] border border-solid border-border uppercase backdrop-blur-md m-4 shadow-lg">
        <nav
          class="flex items-center justify-between px-[20px] py-[12px]"
          aria-label="Main navigation"
        >
          <Link href={'/'}>
            <Logo class="h-[40px] w-[40px]" />
          </Link>
          <ul class="grid grid-cols-2 items-center gap-4 text-lg font-bold sm:flex">
            {pages.map((page, key) => {
              const isActive =
                !page.blank &&
                (location.url.pathname === page.url ||
                  location.url.pathname === `${page.url}/`);
              if (page.name === 'robots') {
                return (
                  <li
                    class="relative group"
                    key={key}
                    onKeyDown$={handleSeasonKeydown}
                  >
                    <Link
                      href={page.url}
                      class={
                        'flex items-center gap-2 duration-200 hover:text-branding' +
                        (isActive ? ' text-branding' : '')
                      }
                      aria-haspopup="true"
                      data-robots-trigger
                    >
                      <DecryptText content={page.name} />
                      <span class="text-xs transition-transform duration-200 group-hover:translate-y-[1px]">
                        ▾
                      </span>
                    </Link>
                    <div class="absolute left-1/2 top-full z-10 w-[240px] -translate-x-1/2 translate-y-2 opacity-0 pointer-events-none transition duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
                      <div class="rounded-[14px] border border-border bg-black/80 p-3 shadow-lg backdrop-blur-md">
                        <p class="px-2 text-[10px] uppercase tracking-[0.35em] text-white/50">
                          season index
                        </p>
                        <div class="mt-3 flex flex-col gap-2">
                          {robotSeasons.map((season) => (
                            <Link
                              key={season.name}
                              href={season.url}
                              class="group/season rounded-[10px] border border-transparent px-2 py-2 transition duration-200 hover:border-border hover:bg-white/5"
                              data-season-link
                            >
                              <p class="text-[11px] uppercase tracking-[0.25em] text-white/50">
                                {season.season}
                              </p>
                              <p class="text-sm font-bold uppercase group-hover/season:text-branding">
                                {season.name}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }
              return (
                <li
                  class={
                    'duration-200 hover:text-branding' +
                    (isActive ? ' text-branding' : '')
                  }
                  key={key}
                >
                  <Link
                    href={page.url}
                    target={page.blank ? '_blank' : '_self'}
                    rel={page.blank ? 'noreferrer' : undefined}
                  >
                    <DecryptText content={page.name} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main class="flex-1">
        <Slot />
      </main>
    </div>
  );
});
