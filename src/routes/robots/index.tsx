import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import {
  RobotOverviewCard,
  RobotOverviewFeatureGrid,
  RobotOverviewGrid,
  RobotOverviewHero,
  RobotOverviewPage,
  RobotOverviewSection,
  RobotOverviewShowcase,
  RobotOverviewStatGrid,
} from '~/components/RobotOverview';

const seasons = [
  {
    id: 'into-the-deep',
    season: '2024-2025 season',
    title: 'Into the Deep',
    summary:
      'A precision-driven build focused on fast vertical scoring, low-drag intake paths, and a confident endgame routine for deep-zone climbs.',
    stats: [
      {
        label: 'cycle target',
        value: '12s',
        detail: 'Designed for rapid mid-field returns and clean handoffs.',
      },
      {
        label: 'auton paths',
        value: '3',
        detail: 'Reliable scripted routes with vision-assisted alignment.',
      },
      {
        label: 'drivebase',
        value: '6wd',
        detail: 'Balanced traction with tuned center drop for agility.',
      },
    ],
    showcases: [
      {
        label: 'signature mechanism',
        title: 'Dual-stage lift',
        description:
          'A stacked lift that keeps the robot compact while still reaching the highest scoring zones.',
      },
      {
        label: 'endgame focus',
        title: 'Deep hang routine',
        description:
          'Quick-release hooks and a stowable bar help lock in consistent endgame points.',
      },
    ],
    systems: [
      {
        title: 'Ground-to-goal intake',
        meta: 'single motion',
        description:
          'Wide funnels and compliant rollers make pickups reliable even on edge cases.',
      },
      {
        title: 'Stability rails',
        meta: 'low profile',
        description:
          'Drop-down outriggers steady the chassis for high-elevation scoring.',
      },
      {
        title: 'Operator feedback',
        meta: 'driver aids',
        description:
          'Haptic cues and LED status keep cycles consistent under pressure.',
      },
      {
        title: 'Tunable presets',
        meta: 'quick swaps',
        description:
          'Position presets for each scoring tier reduce driver workload.',
      },
    ],
    strategy: [
      {
        title: 'Opening cadence',
        description:
          'Fast first cycle, then settle into a repeatable rhythm focused on clean handoffs.',
      },
      {
        title: 'Alliance sync',
        description:
          'Built to clear lanes and support partner cycles during shared scoring windows.',
      },
      {
        title: 'Defensive response',
        description:
          'Compact footprint keeps paths open and reduces susceptibility to blocking.',
      },
      {
        title: 'Endgame checklist',
        description:
          'Dedicated callouts ensure the hang routine stays on schedule.',
      },
    ],
    buildNotes: [
      {
        title: 'Weight distribution',
        description:
          'Battery placement keeps the center of gravity low during lift motion.',
      },
      {
        title: 'Service access',
        description: 'Modular wiring trays speed up pit repairs.',
      },
      {
        title: 'Auton testing',
        description: 'Field-accurate mockups reduce trajectory drift.',
      },
    ],
  },
  {
    id: 'centerstage',
    season: '2023-2024 season',
    title: 'Centerstage',
    summary:
      'A versatile scoring robot built to stack pixels quickly, manage backstage cycles, and launch the drone with confidence.',
    stats: [
      {
        label: 'scoring lanes',
        value: '2x',
        detail: 'Optimized for both wing and backstage routes.',
      },
      {
        label: 'pixel control',
        value: '4',
        detail: 'Controlled staging for high-value mosaics.',
      },
      {
        label: 'drone launch',
        value: '1',
        detail: 'Integrated spring assist for repeatable launches.',
      },
    ],
    showcases: [
      {
        label: 'signature mechanism',
        title: 'Pixel conveyor',
        description:
          'A compliant belt system that centers pixels before scoring.',
      },
      {
        label: 'endgame focus',
        title: 'Drone launcher',
        description:
          'A guided channel keeps flight paths clean and consistent.',
      },
    ],
    systems: [
      {
        title: 'Side intake',
        meta: 'multi-pick',
        description:
          'Dual rollers allow quick pickups while staying square to the board.',
      },
      {
        title: 'Deposit arm',
        meta: 'compact',
        description:
          'Folded linkage keeps the robot within frame perimeter between cycles.',
      },
      {
        title: 'Driver view',
        meta: 'camera stack',
        description: 'Front and rear cams reduce blind alignment.',
      },
      {
        title: 'Automation',
        meta: 'macro presets',
        description:
          'Single-button macros for consistent backstage placements.',
      },
    ],
    strategy: [
      {
        title: 'Early mosaic',
        description:
          'Prioritize quick pixel stacks to establish a scoring buffer.',
      },
      {
        title: 'Wing support',
        description:
          'Keep cycles short and leave clear lanes for alliance partners.',
      },
      {
        title: 'Defense ready',
        description: 'Reactive pathing to avoid mid-field congestion.',
      },
      {
        title: 'Drone timing',
        description:
          'Dedicated endgame timer ensures launch window hits every match.',
      },
    ],
    buildNotes: [
      {
        title: 'Board alignment',
        description: 'Guide rails keep pixels flush to the backdrop.',
      },
      {
        title: 'Drive tuning',
        description: 'Low-gear torque for controlled pixel placement.',
      },
      {
        title: 'Cycle routing',
        description: 'Optimized intake routes reduce traffic conflicts.',
      },
    ],
  },
  {
    id: 'powerplay',
    season: '2022-2023 season',
    title: 'PowerPlay',
    summary:
      'A speed-first cone scoring robot that emphasized rapid junction cycles and predictable beacon delivery.',
    stats: [
      {
        label: 'cone capacity',
        value: '2',
        detail: 'Secure stacking for high junctions.',
      },
      {
        label: 'junction reach',
        value: 'high',
        detail: 'Adjustable lift for all pole heights.',
      },
      {
        label: 'cycle speed',
        value: '10s',
        detail: 'Short paths and fast intake resets.',
      },
    ],
    showcases: [
      {
        label: 'signature mechanism',
        title: 'Pivot lift',
        description:
          'Quick pivoting lift for smooth cone placement at any junction.',
      },
      {
        label: 'endgame focus',
        title: 'Beacon drop',
        description: 'Quick-release claw for consistent endgame points.',
      },
    ],
    systems: [
      {
        title: 'Cone intake',
        meta: 'centered',
        description:
          'Self-centering guides reduce pickup misalignment.',
      },
      {
        title: 'Lift carriage',
        meta: 'rigid',
        description:
          'Reinforced slides keep cones stable while moving fast.',
      },
      {
        title: 'Auto align',
        meta: 'sensors',
        description:
          'Distance sensing for repeatable junction placement.',
      },
      {
        title: 'Driver assists',
        meta: 'quick scoring',
        description:
          'Auto-level macros speed up cone stacking.',
      },
    ],
    strategy: [
      {
        title: 'Fast opener',
        description: 'Hit mid junctions early to establish tempo.',
      },
      {
        title: 'Cycle lanes',
        description:
          'Dedicated lanes keep cone returns clean and predictable.',
      },
      {
        title: 'Beacon focus',
        description:
          'Endgame positioning set before the final 20 seconds.',
      },
      {
        title: 'Defense routing',
        description:
          'Shortcuts avoid heavy defense and keep cycles steady.',
      },
    ],
    buildNotes: [
      {
        title: 'Slide tuning',
        description: 'Low-friction tuning for faster extension.',
      },
      {
        title: 'Grip inserts',
        description: 'Soft inserts improved cone retention.',
      },
      {
        title: 'Match prep',
        description: 'Preset load positions reduce downtime.',
      },
    ],
  },
] as const;

export default component$(() => {
  return (
    <RobotOverviewPage>
      <RobotOverviewHero
        eyebrow="season by season"
        title="Robot Overviews"
        subtitle="15534 vertex"
        description="A quick look at how VERTEX designs evolve each season. Each overview captures the build priorities, match strategy, and standout systems that define the robot."
        highlights={seasons.map((season) => season.title)}
      />

      <div class="flex flex-col gap-4">
        <p class="text-xs uppercase tracking-[0.35em] text-white/60">
          Jump to season
        </p>
        <RobotOverviewGrid columns={3}>
          {seasons.map((season) => (
            <Link
              key={season.id}
              href={`/robots#${season.id}`}
              class="block"
            >
              <RobotOverviewCard
                eyebrow={season.season}
                title={season.title}
                description={season.summary}
              />
            </Link>
          ))}
        </RobotOverviewGrid>
      </div>

      {seasons.map((season) => (
        <RobotOverviewSection
          key={season.id}
          id={season.id}
          title={season.title}
          season={season.season}
          summary={season.summary}
        >
          <RobotOverviewStatGrid stats={season.stats} />
          <RobotOverviewGrid columns={2}>
            {season.showcases.map((showcase) => (
              <RobotOverviewShowcase
                key={showcase.title}
                label={showcase.label}
                title={showcase.title}
                description={showcase.description}
              />
            ))}
          </RobotOverviewGrid>
          <RobotOverviewFeatureGrid
            title="Key systems"
            items={season.systems}
          />
          <RobotOverviewFeatureGrid
            title="Match flow"
            items={season.strategy}
          />
          <RobotOverviewGrid columns={3}>
            {season.buildNotes.map((note) => (
              <RobotOverviewCard
                key={note.title}
                eyebrow="build note"
                title={note.title}
                description={note.description}
              />
            ))}
          </RobotOverviewGrid>
        </RobotOverviewSection>
      ))}
    </RobotOverviewPage>
  );
});
