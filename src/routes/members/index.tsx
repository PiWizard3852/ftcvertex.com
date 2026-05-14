import { component$ } from '@builder.io/qwik';

const members = [
  {
    name: 'Avery Cole',
    role: 'Team Captain',
    description:
      'Guides strategy, drives practice, and match prep while keeping the team aligned on goals and deadlines.',
    focus: 'Alliance strategy',
    image: '/members/avery.svg',
  },
  {
    name: 'Jordan Reyes',
    role: 'Lead Programmer',
    description:
      'Builds reliable autonomous routines and match telemetry tools to keep every subsystem dialed in.',
    focus: 'Autonomy + controls',
    image: '/members/jordan.svg',
  },
  {
    name: 'Priya Shah',
    role: 'Mechanical Lead',
    description:
      'Designs the robot architecture, iterates mechanisms, and keeps the pit ready for fast repairs.',
    focus: 'Mechanism design',
    image: '/members/priya.svg',
  },
  {
    name: 'Leo Tran',
    role: 'Outreach & Media',
    description:
      'Tells the VERTEX story, manages sponsor updates, and captures every build milestone.',
    focus: 'Storytelling',
    image: '/members/leo.svg',
  },
] as const;

export default component$(() => {
  return (
    <section class="min-h-screen px-6 pb-16 pt-32">
      <div class="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div class="flex flex-col gap-4">
          <p class="text-xs uppercase tracking-[0.35em] text-branding">vertex crew</p>
          <h1 class="pixel-powerline text-[min(14vw,4rem)] sm:text-[64px]">
            Members
          </h1>
          <p class="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Meet the builders, coders, and storytellers behind FTC 15534. We
            collaborate across disciplines to design, build, and compete with a
            shared focus on precision and creativity.
          </p>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          {members.map((member) => (
            <article
              key={member.name}
              class="flex flex-col gap-4 rounded-[16px] border border-border bg-[#0b0b0b]/80 p-5 shadow-lg"
            >
              <div class="flex items-center gap-4">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  width="80"
                  height="80"
                  class="h-20 w-20 rounded-[12px] border border-border object-cover"
                />
                <div class="flex flex-col gap-1">
                  <h2 class="text-lg font-bold uppercase tracking-wide">
                    {member.name}
                  </h2>
                  <p class="text-xs uppercase tracking-[0.3em] text-branding">
                    {member.role}
                  </p>
                </div>
              </div>
              <p class="text-sm leading-relaxed text-white/80">
                {member.description}
              </p>
              <p class="text-xs uppercase tracking-[0.2em] text-white/60">
                Focus: {member.focus}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});
