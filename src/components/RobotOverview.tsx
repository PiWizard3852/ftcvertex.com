import { Slot, component$ } from '@builder.io/qwik';

export const RobotOverviewPage = component$(() => {
  return (
    <section class="min-h-screen px-6 pb-20 pt-32">
      <div class="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <Slot />
      </div>
    </section>
  );
});

interface RobotOverviewHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
}

export const RobotOverviewHero = component$((props: RobotOverviewHeroProps) => {
  return (
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-4">
        <p class="text-xs uppercase tracking-[0.35em] text-branding">
          {props.eyebrow}
        </p>
        <div class="flex flex-col gap-3">
          <h1 class="pixel-powerline text-[min(16vw,4.5rem)] sm:text-[72px]">
            {props.title}
          </h1>
          {props.subtitle ? (
            <p class="text-lg uppercase tracking-[0.25em] text-white/70">
              {props.subtitle}
            </p>
          ) : null}
        </div>
        <p class="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
          {props.description}
        </p>
      </div>
      {props.highlights && props.highlights.length > 0 ? (
        <div class="flex flex-wrap gap-3">
          {props.highlights.map((highlight) => (
            <span
              key={highlight}
              class="rounded-full border border-border bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70"
            >
              {highlight}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
});

interface RobotOverviewSectionProps {
  id: string;
  title: string;
  season: string;
  summary: string;
}

export const RobotOverviewSection = component$(
  (props: RobotOverviewSectionProps) => {
    return (
      <section id={props.id} class="scroll-mt-28">
        <div class="flex flex-col gap-8 rounded-[20px] border border-border bg-[#0b0b0b]/80 p-6 shadow-lg sm:p-8">
          <div class="flex flex-col gap-3">
            <p class="text-xs uppercase tracking-[0.35em] text-branding">
              {props.season}
            </p>
            <h2 class="pixel-powerline text-[min(12vw,3.5rem)] sm:text-[48px]">
              {props.title}
            </h2>
            <p class="text-sm leading-relaxed text-white/80 sm:text-base">
              {props.summary}
            </p>
          </div>
          <Slot />
        </div>
      </section>
    );
  },
);

interface RobotOverviewStat {
  label: string;
  value: string;
  detail?: string;
}

export const RobotOverviewStatGrid = component$(
  ({ stats }: { stats: RobotOverviewStat[] }) => {
    return (
      <div class="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            class="flex h-full flex-col gap-2 rounded-[16px] border border-border bg-black/60 p-4"
          >
            <p class="text-xs uppercase tracking-[0.3em] text-white/60">
              {stat.label}
            </p>
            <p class="text-2xl font-bold uppercase">{stat.value}</p>
            {stat.detail ? (
              <p class="text-xs leading-relaxed text-white/60">
                {stat.detail}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    );
  },
);

interface RobotOverviewFeature {
  title: string;
  description: string;
  meta?: string;
}

export const RobotOverviewFeatureGrid = component$(
  ({ title, items }: { title: string; items: RobotOverviewFeature[] }) => {
    return (
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <p class="text-xs uppercase tracking-[0.35em] text-white/60">
            {title}
          </p>
          <span class="h-px flex-1 bg-border/60" />
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              class="flex h-full flex-col gap-3 rounded-[16px] border border-border bg-black/50 p-4"
            >
              <div class="flex flex-col gap-1">
                <p class="text-sm font-bold uppercase">{item.title}</p>
                {item.meta ? (
                  <p class="text-xs uppercase tracking-[0.3em] text-branding">
                    {item.meta}
                  </p>
                ) : null}
              </div>
              <p class="text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

interface RobotOverviewShowcaseProps {
  label: string;
  title: string;
  description: string;
}

export const RobotOverviewShowcase = component$(
  (props: RobotOverviewShowcaseProps) => {
    return (
      <div class="relative flex h-full flex-col gap-3 overflow-hidden rounded-[18px] border border-border bg-gradient-to-br from-[#121212] via-black to-[#1a0f12] p-5">
        <div class="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-branding/20 blur-2xl" />
        <p class="text-xs uppercase tracking-[0.3em] text-white/60">
          {props.label}
        </p>
        <p class="text-lg font-bold uppercase">{props.title}</p>
        <p class="text-sm leading-relaxed text-white/70">
          {props.description}
        </p>
      </div>
    );
  },
);

export const RobotOverviewGrid = component$(
  ({ columns = 2 }: { columns?: 2 | 3 }) => {
    const gridColumns = columns === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2';
    return (
      <div class={`grid gap-4 ${gridColumns}`}>
        <Slot />
      </div>
    );
  },
);

interface RobotOverviewCardProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export const RobotOverviewCard = component$(
  (props: RobotOverviewCardProps) => {
    return (
      <div class="flex h-full flex-col gap-3 rounded-[16px] border border-border bg-black/60 p-4">
        {props.eyebrow ? (
          <p class="text-xs uppercase tracking-[0.3em] text-branding">
            {props.eyebrow}
          </p>
        ) : null}
        <p class="text-sm font-bold uppercase">{props.title}</p>
        <p class="text-sm leading-relaxed text-white/70">
          {props.description}
        </p>
      </div>
    );
  },
);
