import { useState, useEffect } from "react";
import React from "react";

// ─── Card data ──────────────────────────────────────────────────────────────
const cards = [
  { id: 1, name: "Lloyd", role: "Green Ninja", type: "hero", element: "Life", stats: { strength: 17, speed: 15, skill: 19, dragonPower: 14, intelligence: 18 }, description: "The legendary Green Ninja, master of Energy and leader of the ninja team after the Merge.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/lloyd.jpg" },
  { id: 2, name: "Kai", role: "Fire Ninja", type: "hero", element: "Fire", stats: { strength: 18, speed: 14, skill: 16, dragonPower: 11, intelligence: 10 }, description: "Hot-headed master of fire whose fiery spirit is matched only by his blazing fists.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/kai.jpg" },
  { id: 3, name: "Nya", role: "Water Ninja", type: "hero", element: "Water", stats: { strength: 14, speed: 17, skill: 16, dragonPower: 12, intelligence: 15 }, description: "Master of water, reunited with Kai. Calm as the ocean — until she strikes.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/nya.jpg" },
  { id: 4, name: "Arin", role: "Apprentice Ninja", type: "hero", element: "Object Spinjitzu", stats: { strength: 12, speed: 14, skill: 11, dragonPower: 17, intelligence: 9 }, description: "A huge fan of the Ninja who discovered his own powers. Brave, loyal and still growing.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/arin.jpg" },
  { id: 5, name: "Sora", role: "Elemental Master of Technology", type: "hero", element: "Technology", stats: { strength: 11, speed: 13, skill: 16, dragonPower: 15, intelligence: 19 }, description: "A technopath from Imperium who can interface with machines. Brains over brawn.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/sora.jpg" },
  { id: 6, name: "Wyldfyre", role: "Dragon-Raised Warrior", type: "hero", element: "Heat", stats: { strength: 14, speed: 18, skill: 13, dragonPower: 20, intelligence: 8 }, description: "Raised by dragons in the wild. Fierce, untamed and speaks dragon better than people.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/wyldfyre.jpg" },
  { id: 7, name: "Riyu", role: "Baby Dragon", type: "hero", element: "None", stats: { strength: 9, speed: 15, skill: 7, dragonPower: 20, intelligence: 7 }, description: "An adorable but powerful young dragon bonded to the ninja team.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/riyu.jpg" },
  { id: 8, name: "Frak", role: "Elemental Master of Quake", type: "hero", element: "Quake", stats: { strength: 17, speed: 12, skill: 12, dragonPower: 11, intelligence: 8 }, description: "A big-hearted Serpentine and master of Quake. Slow but hits like an earthquake.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/frak.jpg" },
  { id: 9, name: "Master Wu", role: "Spinjitzu Grandmaster", type: "hero", element: "Creation", stats: { strength: 16, speed: 11, skill: 20, dragonPower: 15, intelligence: 20 }, description: "The ancient teacher whose wisdom surpasses almost everyone — and whose staff hits even harder.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/master_wu.jpg" },
  { id: 10, name: "P.I.X.A.L.", role: "Nindroid Warrior", type: "hero", element: "None", stats: { strength: 15, speed: 16, skill: 14, dragonPower: 7, intelligence: 18 }, description: "Part Nindroid, all ninja. Her analytical mind and combat systems make her formidable.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/pixal.jpg" },
  { id: 11, name: "Egalt", role: "Dragon Master", type: "hero", element: "None", stats: { strength: 15, speed: 9, skill: 15, dragonPower: 18, intelligence: 14 }, description: "Elder Dragon Master who teaches the Rising Dragon technique. Stoic, powerful and wise.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/egalt.jpg" },
  { id: 12, name: "Rontu", role: "Dragon Master", type: "hero", element: "None", stats: { strength: 13, speed: 12, skill: 14, dragonPower: 17, intelligence: 12 }, description: "Rontu trains alongside Egalt on the Dragon Masters' plateau.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/rontu.jpg" },
  { id: 13, name: "Arc Dragon of Focus", role: "Guardian of the Merged Realms", type: "hero", element: "Focus", stats: { strength: 20, speed: 18, skill: 15, dragonPower: 20, intelligence: 16 }, description: "Summoned in two halves by the ninja to defeat Thunderfang. When united, its power is near-unstoppable.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/arc_dragon.jpg" },
  { id: 14, name: "Cole", role: "Earth Ninja", type: "hero", element: "Earth", stats: { strength: 18, speed: 12, skill: 15, dragonPower: 11, intelligence: 12 }, description: "The steadfast master of Earth. Cole's strength and reliability are the bedrock of the ninja team.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/cole.jpg" },
  { id: 15, name: "Jay", role: "Lightning Ninja", type: "hero", element: "Lightning", stats: { strength: 14, speed: 19, skill: 16, dragonPower: 10, intelligence: 14 }, description: "The fast-talking master of Lightning, working as a bounty hunter after the Merge before rejoining the ninja.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/jay.jpg" },
  { id: 16, name: "Roby", role: "Games Master", type: "hero", element: "None", stats: { strength: 10, speed: 13, skill: 11, dragonPower: 9, intelligence: 16 }, description: "Games Master of the Tournament of Sources and Wyldfyre's boyfriend. Helped expose his uncle Bleckt's cheating.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/roby.jpg" },
  { id: 17, name: "Empress Beatrix", role: "Ruler of Imperium", type: "villain", element: "None", stats: { strength: 12, speed: 10, skill: 11, dragonPower: 3, intelligence: 20 }, description: "Tyrannical ruler of Imperium who drains dragons of their life force to power her kingdom.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/empress_beatrix.jpg" },
  { id: 18, name: "Lord Ras", role: "Elemental Master of Shadow", type: "villain", element: "Shadow", stats: { strength: 18, speed: 16, skill: 20, dragonPower: 5, intelligence: 17 }, description: "The dark master of Shatterspin who leads the Shadow Dojo against the ninja.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/lord_ras.jpg" },
  { id: 19, name: "Cinder", role: "Elemental Master of Smoke", type: "villain", element: "Smoke", stats: { strength: 16, speed: 17, skill: 17, dragonPower: 4, intelligence: 11 }, description: "Wolf Clan's deadliest fighter and Shatterspin master. Broke Wyldfyre's leg without breaking a sweat.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/cinder.jpg" },
  { id: 20, name: "Rapton", role: "Imperium Commander", type: "villain", element: "None", stats: { strength: 15, speed: 13, skill: 13, dragonPower: 2, intelligence: 11 }, description: "Commander of the Claws of Imperium. Relentless dragon hunter who follows orders without mercy.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/rapton.jpg" },
  { id: 21, name: "Jordana", role: "Imperium Agent", type: "villain", element: "None", stats: { strength: 9, speed: 15, skill: 11, dragonPower: 3, intelligence: 17 }, description: "Scientist and spy who extracted Source Dragon energy for Beatrix. Was possessed by Rox during the Blood Moon ritual.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/jordana.jpg" },
  { id: 22, name: "Nokt", role: "Elemental Master of Brute Force", type: "villain", element: "Brute Force", stats: { strength: 16, speed: 14, skill: 17, dragonPower: 4, intelligence: 14 }, description: "Master of darkness in the Forbidden Five. Moves like nightfall — unseen until too late.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/nokt.jpg" },
  { id: 23, name: "Rox", role: "Elemental Master of Fear", type: "villain", element: "Fear", stats: { strength: 18, speed: 15, skill: 17, dragonPower: 3, intelligence: 11 }, description: "The brute of the Forbidden Five. Immovable as rock and just as likely to crush you flat.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/rox.jpg" },
  { id: 24, name: "Zarkt", role: "Elemental Master of Misfortune", type: "villain", element: "Misfortune", stats: { strength: 15, speed: 15, skill: 14, dragonPower: 3, intelligence: 12 }, description: "Electric and unpredictable. Zarkt brings crackling chaos to every battle.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/zarkt.jpg" },
  { id: 25, name: "Drix", role: "Elemental Master of Swarm", type: "villain", element: "Swarm", stats: { strength: 14, speed: 12, skill: 13, dragonPower: 2, intelligence: 16 }, description: "A corrosive menace. Drix's powers eat through armour, shields and ninja confidence alike.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/drix.jpg" },
  { id: 26, name: "Kur", role: "Elemental Master of Decay", type: "villain", element: "Decay", stats: { strength: 16, speed: 11, skill: 14, dragonPower: 2, intelligence: 15 }, description: "Master of the void — a terrifying absence of everything, including mercy.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/kur.jpg" },
  { id: 27, name: "Dr. LaRow", role: "Imperium Scientist", type: "villain", element: "None", stats: { strength: 6, speed: 7, skill: 5, dragonPower: 1, intelligence: 18 }, description: "The brilliant and cruel scientist behind Imperium's dragon-draining technology.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/dr_larow.jpg" },
  { id: 28, name: "Dorama", role: "Pyrotechnician Showman", type: "villain", element: "None", stats: { strength: 10, speed: 12, skill: 9, dragonPower: 1, intelligence: 14 }, description: "A deranged former showman who built dragon-draining tech for Imperium. Fights with fireworks, giant puppets and an unshakeable flair for the dramatic.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/dorama.jpg" },
  { id: 29, name: "Bleckt", role: "Corrupt Tournament Minister", type: "villain", element: "None", stats: { strength: 8, speed: 7, skill: 6, dragonPower: 3, intelligence: 17 }, description: "Roby's treacherous uncle and former Minister of Ledgering. Rigged the Tournament of Sources for Ras — until Wyldfyre and Zur brought him down.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/bleckt.jpg" },
  { id: 30, name: "Thunderfang", role: "Shatter Dragon of Chaos", type: "villain", element: "Chaos", stats: { strength: 20, speed: 18, skill: 5, dragonPower: 19, intelligence: 7 }, description: "A monstrous storm dragon. Thunder rolls wherever Thunderfang flies.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/thunderfang.jpg" },
  { id: 31, name: "Zeatrix", role: "Elemental Master of Shockwave", type: "villain", element: "Shockwave", stats: { strength: 15, speed: 14, skill: 15, dragonPower: 3, intelligence: 13 }, description: "Twin sister of Empress Beatrix. She commands devastating shockwaves with cold precision.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/zeatrix.jpg" },
  { id: 32, name: "Wolf Mask Warrior", role: "Wolf Clan Soldier", type: "villain", element: "None", stats: { strength: 14, speed: 13, skill: 12, dragonPower: 2, intelligence: 7 }, description: "Ras's wolf-masked footsoldiers. Individually beatable — but they never come alone.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/wolf_mask_warrior.jpg" },
  { id: 33, name: "Arrakore", role: "Djinn Sorcerer", type: "hero", element: "None", stats: { strength: 12, speed: 11, skill: 14, dragonPower: 11, intelligence: 18 }, description: "A powerful Djinn who teleports several ninja to Djinjago. His wish magic is as unpredictable as it is potent.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/arrakore.jpg" },
  { id: 34, name: "Geo", role: "Elemental Master of Fusion", type: "hero", element: "Fusion", stats: { strength: 11, speed: 10, skill: 12, dragonPower: 8, intelligence: 15 }, description: "A Munce-Geckle hybrid and member of the Finders. Rejected by both tribes, he found his place fighting alongside the ninja.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/geo.jpg" },
  { id: 35, name: "Heatwave", role: "Guardian Dragon", type: "hero", element: "Heat", stats: { strength: 18, speed: 16, skill: 13, dragonPower: 18, intelligence: 9 }, description: "The dragon who raised Wyldfyre from infancy. Captured by Imperium and freed by Lloyd — their bond runs deeper than blood.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/heatwave.jpg" },
  { id: 36, name: "Gandalaria", role: "High Sorceress of Mysterium", type: "hero", element: "None", stats: { strength: 7, speed: 9, skill: 18, dragonPower: 10, intelligence: 17 }, description: "Ancient sorceress of Mysterium. Created Bonzle to imprison the Forbidden Five.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/gandalaria.jpg" },
  { id: 37, name: "Zane", role: "Ice Ninja", type: "hero", element: "Ice", stats: { strength: 15, speed: 14, skill: 17, dragonPower: 10, intelligence: 18 }, description: "The titanium Nindroid ninja. Cold precision and perfect logic wrapped in gleaming armour.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/zane.jpg" },
  { id: 38, name: "Lord Garmadon", role: "Dark Lord", type: "villain", element: "Destruction", stats: { strength: 19, speed: 12, skill: 18, dragonPower: 8, intelligence: 17 }, description: "Lloyd's fearsome father and master of destruction. Four arms, zero mercy — and a complicated relationship with his son.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/lord_garmadon.jpg" },
  { id: 39, name: "Claw of Imperium", role: "Imperium Soldier", type: "villain", element: "None", stats: { strength: 12, speed: 11, skill: 10, dragonPower: 1, intelligence: 6 }, description: "The elite soldiers of Empress Beatrix, deployed to hunt and capture dragons across the Merged Realms.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/claw_of_imperium.jpg" },
  { id: 40, name: "Koko", role: "Reformed Warrior", type: "hero", element: "None", stats: { strength: 15, speed: 14, skill: 16, dragonPower: 7, intelligence: 17 }, description: "Lloyd's mother and a formidable warrior in her own right. She walked away from darkness — but never lost her edge.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/koko.jpg" },
  { id: 42, name: "Tox", role: "Elemental Master of Poison", type: "hero", element: "Poison", stats: { strength: 11, speed: 12, skill: 13, dragonPower: 2, intelligence: 14 }, description: "A veteran Elemental Master of Poison who competed in both the Tournament of Elements and Tournament of Sources. Quietly dangerous.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/tox.jpg" },
  { id: 43, name: "Mr. Pale", role: "Elemental Master of Light", type: "hero", element: "Light", stats: { strength: 10, speed: 13, skill: 12, dragonPower: 2, intelligence: 15 }, description: "The elusive Elemental Master of Light. His blinding power dazzles opponents before they even know the fight has started.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/mr_pale.jpg" },
  { id: 44, name: "Bonzle", role: "Living Spell", type: "hero", element: "None", stats: { strength: 2, speed: 6, skill: 17, dragonPower: 4, intelligence: 17 }, description: "A mysterious living spell created by Gandalaria, capable of sealing the Forbidden Five. Small but extraordinarily powerful in the right hands.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/bonzle.jpg" },
  { id: 45, name: "Zanth", role: "Djinjagan Dragon", type: "hero", element: "None", stats: { strength: 16, speed: 20, skill: 15, dragonPower: 19, intelligence: 14 }, description: "Sora's loyal dragon companion and one of Djinjago's last survivors. Can shift from pocket-sized to enormous — and flies fast enough to turn purple.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/zanth.jpg" },
  { id: 46, name: "Jiro", role: "Lightning Dragon", type: "hero", element: "Lightning", stats: { strength: 16, speed: 19, skill: 14, dragonPower: 18, intelligence: 12 }, description: "The fastest dragon in the ninja's stable. Bonded with Nya, upgraded by Sora. Strikes with electrokinetic breath and shields allies with his wings.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/jiro.jpg" },
  { id: 47, name: "Euphrasia", role: "Elemental Master of Wind", type: "hero", element: "Wind", stats: { strength: 10, speed: 17, skill: 15, dragonPower: 8, intelligence: 16 }, description: "Cloud Kingdom's quiet protector. Hid her Wind powers until the kingdom needed her most — now one of Lloyd's students.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/euphrasia.jpg" },
  { id: 48, name: "Lobbo", role: "Mech Racer", type: "hero", element: "None", stats: { strength: 10, speed: 18, skill: 9, dragonPower: 4, intelligence: 10 }, description: "Loveable robot and Crossroads legend. Won the Mech Master 5000 by accident — and runs Lobbo's Totally Rad Arcade. Lobbo Lobbo.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/lobbo.jpg" },
  { id: 49, name: "Kreel", role: "Junkyard Boss", type: "villain", element: "None", stats: { strength: 11, speed: 17, skill: 13, dragonPower: 3, intelligence: 14 }, description: "Scheming mech racer and Crossroads junkyard owner. Runs the Whack Rats and a podcast. Always working an angle.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/kreel.jpg" },
  { id: 50, name: "Arc Dragon of Life", role: "Guardian of the Whispering Wood", type: "hero", element: "Life", stats: { strength: 16, speed: 15, skill: 14, dragonPower: 19, intelligence: 17 }, description: "Ancient guardian of the Whispering Wood who reveals Lloyd's true destiny. Wise, powerful and deeply connected to the Life element.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/arc_dragon_life.jpg" },
  { id: 51, name: "Earth Monster", role: "Elemental Monster of Tar", type: "villain", element: "Earth", stats: { strength: 19, speed: 8, skill: 4, dragonPower: 6, intelligence: 5 }, description: "A corrupted being born from elemental imbalance. Pure destructive force — slow, merciless and almost impossible to stop.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/earth_monster.jpg" },
  { id: 52, name: "Mutation Monster", role: "Elemental Monster of Mutation", type: "villain", element: "Life", stats: { strength: 14, speed: 11, skill: 9, dragonPower: 2, intelligence: 4 }, description: "Grotesque creature of corrupted Life energy. Unpredictable and disturbing rather than powerful. Fought by Nya.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/mutation_monster.jpg" },
  { id: 53, name: "Ice Monster", role: "Elemental Monster of Frostbite", type: "villain", element: "Ice", stats: { strength: 16, speed: 13, skill: 5, dragonPower: 4, intelligence: 4 }, description: "Hard, cold and relentless. A corrupted Ice elemental being with no cunning — just frozen, unstoppable force.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/ice_monster.jpg" },
  { id: 54, name: "Acid Monster", role: "Elemental Monster of Acid", type: "villain", element: "Water", stats: { strength: 13, speed: 15, skill: 7, dragonPower: 3, intelligence: 4 }, description: "Fluid and corrosive. Faster than the Earth Monster but equally mindless — a corrupted Water elemental unleashed on the Merged Realms.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/acid_monster.jpg" },
  { id: 55, name: "Fire Monster", role: "Elemental Monster of Magma", type: "villain", element: "Fire", stats: { strength: 17, speed: 14, skill: 3, dragonPower: 8, intelligence: 4 }, description: "A blazing force of corrupted Fire energy. Second only to the Earth Monster in raw destructive power.", image: "https://raw.githubusercontent.com/deliverator23/ninjago-top-trumps/main/images/fire_monster.jpg" },

];

const statLabels = { strength: "⚔️ STRENGTH", speed: "💨 SPEED", skill: "🌀 SKILL", dragonPower: "🐉 DRAGON POWER", intelligence: "🧠 INTELLIGENCE" };

const elementColors = {
  Energy:"#4ade80", Life:"#089000", Fire:"#e03010", Water:"#38bdf8", "Object Spinjitzu":"#fbbf24",
  Flame:"#fb923c", "Multi-Element":"#c084fc", Quake:"#d97706",
  Creation:"#fde68a", Technology:"#fa5486", Stone:"#a8a29e", Wind:"#e0e7ff",
  Motion:"#86efac", Poison:"#a3e635", Ice:"#7dd3fc", Shadow:"#444444",
  Control:"#111111", Shatter:"#7c3aed", Force:"#f87171", Deception:"#7c3aed",
  Night:"#6366f1", Lightning:"#fde047", Acid:"#65a30d", Void:"#1e1b4b",
  "Brute Force":"#8b1a1a", Fear:"#1c1917", Misfortune:"#1e40af", Swarm:"#3d2b00", Decay:"#4d5a1e", Storm:"#60a5fa", Shockwave:"#6d28d9", Chaos:"#7c0000",
  Focus:"#e0f2fe", Earth:"#7a5230", Balance:"#d9f99d", "Wish Magic":"#e879f9",
  Fusion:"#f97316", Heat:"#c2410c", Destruction:"#581c87", Light:"#fef9c3", Smoke:"#6b7280", Djinjago:"#0e7490", None:"#334155",
};

// ─── Stat Bar ────────────────────────────────────────────────────────────────
function StatBar({ label, value, highlighted, onSelect }) {
  // Smooth cold→hot colour interpolation across 1–20
  const t = Math.max(0, Math.min(1, (value - 1) / 19));
  const stops = [
    [0,    [59,  130, 246]],  // blue        (1)
    [0.25, [147, 210, 255]],  // pale blue   (5-6)
    [0.5,  [255, 255, 255]],  // white       (10-11)
    [0.75, [251, 191,  36]],  // yellow      (15-16)
    [0.88, [249, 115,  22]],  // orange      (18)
    [1.0,  [220,  38,  38]],  // red         (20)
  ];
  let r = 255, g = 255, b = 255;
  for (let i = 0; i < stops.length - 1; i++) {
    const [t0, c0] = stops[i], [t1, c1] = stops[i + 1];
    if (t >= t0 && t <= t1) {
      const f = (t - t0) / (t1 - t0);
      r = Math.round(c0[0] + f * (c1[0] - c0[0]));
      g = Math.round(c0[1] + f * (c1[1] - c0[1]));
      b = Math.round(c0[2] + f * (c1[2] - c0[2]));
      break;
    }
  }
  const color = `rgb(${r},${g},${b})`;
  return (
    <button
      onClick={() => onSelect(label)}
      style={{
        display: "flex", alignItems: "center", gap: 9,
        width: "100%", background: highlighted ? "rgba(240,192,64,0.18)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${highlighted ? "rgba(240,192,64,0.6)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 8, padding: "7px 10px", cursor: "pointer", marginBottom: 5,
        transition: "all .15s", fontFamily: "'Rajdhani', sans-serif",
      }}
    >
      <span style={{ fontSize: 16, fontWeight: 700, color: "#cbd5e1", width: 135, textAlign: "left", whiteSpace: "nowrap" }}>{statLabels[label]}</span>
      <div style={{ flex: 1, background: "rgba(255,255,255,0.1)", borderRadius: 5, height: 10, overflow: "hidden" }}>
        <div style={{ width: `${(value/20)*100}%`, height: "100%", background: color, borderRadius: 5, transition: "width .6s cubic-bezier(.4,2,.6,1)" }} />
      </div>
      <span style={{ fontSize: 18, fontWeight: 900, color, width: 30, textAlign: "right", fontFamily: "'Rajdhani', sans-serif" }}>{value}</span>
    </button>
  );
}

// ─── Card Back ───────────────────────────────────────────────────────────────
function CardBack({ color, label }) {
  return (
    <div style={{
      width: 300,
      background: "linear-gradient(160deg, #080d18 0%, #0a1020 100%)",
      border: `2px solid ${color}55`,
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: `0 0 20px ${color}15, 0 10px 40px rgba(0,0,0,0.7)`,
      fontFamily: "'Rajdhani', sans-serif",
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 480,
    }}>
      {/* Diamond tile pattern */}
      <svg width="300" height="480" style={{ position: "absolute", opacity: 0.08 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`diamonds-${label}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20,2 L38,20 L20,38 L2,20 Z" fill="none" stroke={color} strokeWidth="1.5"/>
          </pattern>
        </defs>
        <rect width="300" height="480" fill={`url(#diamonds-${label})`}/>
      </svg>
      {/* Central dragon emblem */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          {/* Outer glow ring */}
          <circle cx="60" cy="60" r="55" fill="none" stroke={color} strokeWidth="1" opacity="0.3"/>
          <circle cx="60" cy="60" r="48" fill="none" stroke={color} strokeWidth="0.5" opacity="0.2"/>
          {/* Dragon silhouette */}
          <path d="M60,20 Q75,30 85,50 Q95,65 85,80 Q80,90 70,88 L60,95 L50,88 Q40,90 35,80 Q25,65 35,50 Q45,30 60,20Z"
            fill={color} opacity="0.15"/>
          <path d="M60,20 Q75,30 85,50 Q95,65 85,80 Q80,90 70,88 L60,95 L50,88 Q40,90 35,80 Q25,65 35,50 Q45,30 60,20Z"
            fill="none" stroke={color} strokeWidth="1.5" opacity="0.6"/>
          {/* Wings */}
          <path d="M42,45 Q25,35 15,45 Q25,55 42,52Z" fill={color} opacity="0.3"/>
          <path d="M78,45 Q95,35 105,45 Q95,55 78,52Z" fill={color} opacity="0.3"/>
          {/* Eye */}
          <circle cx="60" cy="58" r="6" fill={color} opacity="0.5"/>
          <circle cx="60" cy="58" r="3" fill={color} opacity="0.9"/>
        </svg>
        <div style={{ fontSize: 22, fontWeight: 800, color, letterSpacing: 3, textTransform: "uppercase", opacity: 0.9 }}>
          {label}
        </div>
        <div style={{ fontSize: 13, color: color, opacity: 0.5, letterSpacing: 2 }}>
          NINJAGO TOP TRUMPS
        </div>
      </div>
    </div>
  );
}

// ─── Image loader hook ───────────────────────────────────────────────────────
function useProxiedImage(url) {
  const [src, setSrc] = React.useState(null);
  React.useEffect(() => {
    if (!url) return;
    const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
    setSrc(proxy);
  }, [url]);
  return src;
}

// ─── Card image component ─────────────────────────────────────────────────────
function CardImage({ card, elColor }) {
  const [errored, setErrored] = React.useState(false);
  const proxies = [
    `https://api.allorigins.win/raw?url=${encodeURIComponent(card.image)}`,
    `https://corsproxy.io/?${encodeURIComponent(card.image)}`,
    card.image,
  ];
  const [proxyIdx, setProxyIdx] = React.useState(0);

  if (!card.image || errored) {
    return (
      <div style={{ fontSize: 36, fontWeight: 900, color: "#000",
        letterSpacing: -0.5, textAlign: "center", lineHeight: 1, padding: "0 12px" }}>
        {card.name}
      </div>
    );
  }

  return (
    <img
      src={proxies[proxyIdx]}
      alt={card.name}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 0%" }}
      onError={() => {
        if (proxyIdx < proxies.length - 1) setProxyIdx(i => i + 1);
        else setErrored(true);
      }}
    />
  );
}


function Card({ card, selectedStat, onSelectStat }) {
  const elColor = elementColors[card.element] || "#f0c040";
  const border = elColor + "55";
  const accent = elColor;
  const bg = "linear-gradient(160deg, #0a1020 0%, #0f1a2e 60%, #080d18 100%)";

  return (
    <div style={{
      width: 300,
      background: bg,
      border: `2px solid ${border}`,
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: `0 0 20px ${elColor}20, 0 10px 40px rgba(0,0,0,0.7)`,
      fontFamily: "'Rajdhani', sans-serif",
      flexShrink: 0,
    }}>
      {/* Element banner */}
      <div style={{
        background: "linear-gradient(90deg, #0a1628 0%, #0f2040 100%)",
        padding: "7px 12px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "#475569", textTransform: "uppercase" }}>
          NINJAGO
        </span>
        <span style={{
          fontSize: 12, fontWeight: 800, padding: "3px 10px", borderRadius: 20,
          background: elColor + "20", border: `1px solid ${elColor}55`, color: elColor, letterSpacing: 0.5,
        }}>{card.element}</span>
      </div>

      {/* Colour block portrait */}
      <div style={{
        height: 130, background: elColor,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 4,
        position: "relative", overflow: "hidden",
      }}>
        <CardImage card={card} elColor={elColor} />
      </div>

      {/* Name / role / desc */}
      <div style={{ padding: "10px 12px 8px", borderBottom: `1px solid ${border}55` }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: 0.3 }}>{card.name}</div>
        <div style={{ fontSize: 13, color: elColor, marginTop: 3, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", opacity: 0.9 }}>{card.role}</div>
        <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 5, lineHeight: 1.45 }}>{card.description}</div>
      </div>

      {/* Stats */}
      <div style={{ padding: "8px 10px 12px" }}>
        {Object.entries(card.stats).map(([k, v]) => (
          <StatBar key={k} label={k} value={v} highlighted={selectedStat === k} onSelect={onSelectStat} />
        ))}
      </div>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
function initDecks() {
  const shuffled = [...cards].sort(() => Math.random() - 0.5);
  const deckA = [], deckB = [];
  shuffled.forEach((card, i) => (i % 2 === 0 ? deckA : deckB).push(card));
  return { deckA, deckB };
}

export default function TopTrumps() {
  const [mode, setMode] = useState("browse");
  const [selectedStat, setStat] = useState(null);
  const [result, setResult] = useState(null);
  const [turn, setTurn] = useState("p1");
  const [activePlayer, setActivePlayer] = useState(1);
  const [{ deckA, deckB }, setDecks] = useState(() => initDecks());
  const [pot, setPot] = useState([]);
  const [history, setHistory] = useState([]);
  const filtered = cards;

  // Active player's top card vs opponent's top card
  const challengerCard = activePlayer === 1 ? deckA[0] : deckB[0];
  const opponentCard   = activePlayer === 1 ? deckB[0] : deckA[0];
  const challengerColor = activePlayer === 1 ? "#38bdf8" : "#f0c040";
  const opponentColor   = activePlayer === 1 ? "#f0c040" : "#38bdf8";
  const challengerLabel = `PLAYER ${activePlayer}`;
  const opponentLabel   = `PLAYER ${activePlayer === 1 ? 2 : 1}`;

  // Fixed display: P1 always left (cardA), P2 always right (cardB)
  const cardA = deckA[0];
  const cardB = deckB[0];

  function chooseStat(stat) {
    if (!challengerCard || !opponentCard) return;
    setStat(stat);
    const vC = challengerCard.stats[stat];
    const vO = opponentCard.stats[stat];

    if (vC > vO) {
      const newCDeck = [...(activePlayer === 1 ? deckA : deckB).slice(1), challengerCard, opponentCard, ...pot];
      const newODeck = (activePlayer === 1 ? deckB : deckA).slice(1);
      setDecks(activePlayer === 1
        ? { deckA: newCDeck, deckB: newODeck }
        : { deckA: newODeck, deckB: newCDeck });
      setPot([]);
      setResult({ winner: activePlayer, label: challengerLabel + " WINS!", vA: vC, vB: vO, winCard: challengerCard.name, loseCard: opponentCard.name, stat, p1Card: deckA[0], p2Card: deckB[0] });
      setHistory(h => [{ stat, res: challengerLabel + " wins (" + vC + " vs " + vO + ")" }, ...h.slice(0, 4)]);
    } else if (vO > vC) {
      const newODeck = [...(activePlayer === 1 ? deckB : deckA).slice(1), opponentCard, challengerCard, ...pot];
      const newCDeck = (activePlayer === 1 ? deckA : deckB).slice(1);
      setDecks(activePlayer === 1
        ? { deckA: newCDeck, deckB: newODeck }
        : { deckA: newODeck, deckB: newCDeck });
      setPot([]);
      setResult({ winner: activePlayer === 1 ? 2 : 1, label: opponentLabel + " WINS!", vA: vC, vB: vO, winCard: opponentCard.name, loseCard: challengerCard.name, stat, p1Card: deckA[0], p2Card: deckB[0] });
      setHistory(h => [{ stat, res: opponentLabel + " wins (" + vO + " vs " + vC + ")" }, ...h.slice(0, 4)]);
    } else {
      const newCDeck = (activePlayer === 1 ? deckA : deckB).slice(1);
      const newODeck = (activePlayer === 1 ? deckB : deckA).slice(1);
      setDecks(activePlayer === 1
        ? { deckA: newCDeck, deckB: newODeck }
        : { deckA: newODeck, deckB: newCDeck });
      setPot([newPot[0], newPot[1], ...pot]);
      setResult({ winner: 0, label: "DRAW!", vA: vC, vB: vO, potSize: pot.length + 2, winCard: challengerCard.name, loseCard: opponentCard.name, stat, p1Card: deckA[0], p2Card: deckB[0] });
      setHistory(h => [{ stat, res: "Draw (" + vC + ")" }, ...h.slice(0, 4)]);
    }
    setTurn("done");
  }

  function next() {
    if (result?.winner !== 0 && result?.winner !== activePlayer) setActivePlayer(p => p === 1 ? 2 : 1);
    setStat(null); setResult(null); setTurn("p1");
  }

  function reset() {
    setDecks(initDecks()); setPot([]); setStat(null);
    setResult(null); setTurn("p1"); setActivePlayer(1); setHistory([]);
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg,#020917 0%,#0a1628 40%,#0d0a1f 100%)", fontFamily: "'Rajdhani','Segoe UI',sans-serif", color: "#f1f5f9" }}>
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700;800&display=swap" rel="stylesheet"/>

      {/* ── Header ── */}
      <div style={{ background: "linear-gradient(90deg,#020917,#0f2540,#020917)", borderBottom: "1px solid #1e3a5f", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 24 }}>🐉</span>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, background: "linear-gradient(90deg,#38bdf8,#f0c040,#4ade80)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: 1.5 }}>
                NINJAGO: DRAGONS RISING
              </div>
              <div style={{ fontSize: 9, color: "#334155", letterSpacing: 4, fontWeight: 700, marginTop: 1 }}>TOP TRUMPS — 44 CARDS</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {[["browse","📚 Browse"], ["play","⚔️ Play"]].map(([m, label]) => (
            <button key={m} onClick={() => { setMode(m); if (m === "play") reset(); }} style={{
              padding: "8px 18px", borderRadius: 8,
              border: `1px solid ${mode === m ? "#38bdf8" : "#1e3a5f"}`,
              background: mode === m ? "rgba(56,189,248,0.15)" : "transparent",
              color: mode === m ? "#38bdf8" : "#475569",
              fontWeight: 700, fontSize: 12, cursor: "pointer", fontFamily: "inherit", letterSpacing: 1.5, textTransform: "uppercase",
            }}>{label}</button>
          ))}
        </div>
      </div>

      {/* ── Browse ── */}
      {mode === "browse" && (
        <div style={{ padding: 20 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 20, justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ fontSize: 11, color: "#334155", fontFamily: "inherit", letterSpacing: 2, fontWeight: 700 }}>
              ALL 38 CARDS
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            {filtered.map(c => <Card key={c.id} card={c} selectedStat={null} onSelectStat={() => {}} />)}
          </div>
        </div>
      )}

      {/* ── Play ── */}
      {mode === "play" && (
        <div style={{ padding: 20 }}>

          {/* Hand size scoreboard */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 24, marginBottom: 20 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 12, color: "#38bdf8", letterSpacing: 2, fontWeight: 700 }}>PLAYER 1</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "#38bdf8", lineHeight: 1 }}>{deckA.length}</div>
              <div style={{ fontSize: 11, color: "#1e3a5f", fontWeight: 600 }}>CARDS</div>
            </div>
            <div style={{ textAlign: "center", opacity: pot.length > 0 ? 1 : 0.25, transition: "opacity 0.3s" }}>
              <div style={{ fontSize: 11, color: "#f0c040", letterSpacing: 2, fontWeight: 700 }}>POT</div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#f0c040", lineHeight: 1 }}>{pot.length}</div>
              <div style={{ fontSize: 10, color: "#475569", fontWeight: 600 }}>CARDS</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 12, color: "#f0c040", letterSpacing: 2, fontWeight: 700 }}>PLAYER 2</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "#f0c040", lineHeight: 1 }}>{deckB.length}</div>
              <div style={{ fontSize: 11, color: "#1e3a5f", fontWeight: 600 }}>CARDS</div>
            </div>
          </div>

          {/* Game over screen */}
          {(deckA.length === 0 || deckB.length === 0) && (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#f0c040", marginBottom: 12 }}>
                {deckA.length === 0 ? "🏆 PLAYER 2 WINS THE GAME!" : "🏆 PLAYER 1 WINS THE GAME!"}
              </div>
              <div style={{ fontSize: 15, color: "#64748b", marginBottom: 24 }}>All cards collected!</div>
              <button onClick={reset} style={{ padding: "12px 28px", background: "linear-gradient(90deg,#f0c040,#fb923c)", border: "none", borderRadius: 10, color: "#0f172a", fontWeight: 800, fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>🔄 Play Again</button>
            </div>
          )}

          {/* Main play area */}
          {deckA.length > 0 && deckB.length > 0 && (
            <div>
              <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", alignItems: "flex-start" }}>

                {/* Player 1 — always left */}
                <div>
                  <div style={{ textAlign: "center", marginBottom: 8, fontSize: 13, color: "#38bdf8", fontWeight: 700, letterSpacing: 2 }}>
                    {turn === "p1" && activePlayer === 1 ? "PLAYER 1 — TAP A STAT" : "PLAYER 1"}
                  </div>
                  {turn === "done" && result?.p1Card
                    ? <Card card={result.p1Card} selectedStat={result.stat} onSelectStat={() => {}} />
                    : turn === "p1" && activePlayer === 2
                      ? <CardBack color="#38bdf8" label="PLAYER 1" />
                      : <Card card={cardA} selectedStat={selectedStat}
                          onSelectStat={turn === "p1" && activePlayer === 1 ? chooseStat : () => {}} />
                  }
                </div>

                {/* Centre controls */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, paddingTop: 40, minWidth: 160 }}>

                  {turn === "p1" && (
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 40 }}>⚔️</div>
                      <div style={{ fontSize: 14, color: "#475569", marginTop: 8, lineHeight: 1.5, maxWidth: 150 }}>
                        {"Player " + activePlayer + ": tap a stat!"}
                      </div>
                    </div>
                  )}

                  {turn === "done" && result && (
                    <div style={{
                      background: result.winner === 0
                        ? "linear-gradient(135deg,#312e81,#4338ca)"
                        : result.winner === 1
                          ? "linear-gradient(135deg,#1d4ed8,#38bdf8)"
                          : result.winner === 2
                            ? "linear-gradient(135deg,#92400e,#f0c040)"
                            : "linear-gradient(135deg,#92400e,#f0c040)",
                      borderRadius: 16, padding: "16px 18px", textAlign: "center", width: 175,
                      boxShadow: "0 6px 28px rgba(0,0,0,0.5)",
                    }}>
                      <div style={{ fontSize: 44, lineHeight: 1 }}>
                        {result.winner === 0 ? "🤝" : "🏆"}
                      </div>
                      <div style={{ fontSize: 20, fontWeight: 900, color: "#fff", marginTop: 6, letterSpacing: 1 }}>
                        {result.label}
                      </div>
                      {result.stat && (
                        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>
                          {statLabels[result.stat].split(" ").slice(1).join(" ")}
                        </div>
                      )}
                      {result.winner !== 0 && (
                        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.95)", marginTop: 6, lineHeight: 1.5, fontWeight: 700 }}>
                          {result.winCard} <span style={{ fontWeight: 900, fontSize: 16 }}>{result.vA > result.vB ? result.vA : result.vB}</span>
                          <br/>
                          <span style={{ fontWeight: 400, fontSize: 11, opacity: 0.8 }}>beats</span>
                          <br/>
                          {result.loseCard} <span style={{ fontWeight: 900, fontSize: 16 }}>{result.vA < result.vB ? result.vA : result.vB}</span>
                        </div>
                      )}
                      {result.winner === 0 && (
                        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.9)", marginTop: 6, fontWeight: 700 }}>
                          {result.winCard} {result.vA} = {result.loseCard} {result.vB}
                        </div>
                      )}
                      {result.winner === 0 && result.potSize > 0 && (
                        <div style={{ fontSize: 12, color: "#c7d2fe", marginTop: 4 }}>
                          🫙 {result.potSize} in the pot!
                        </div>
                      )}
                    </div>
                  )}

                  {turn === "done" && (
                    <button onClick={next} style={{
                      padding: "12px 22px", background: "linear-gradient(90deg,#38bdf8,#6366f1)",
                      border: "none", borderRadius: 10, color: "#fff",
                      fontWeight: 800, fontSize: 15, cursor: "pointer", fontFamily: "inherit", letterSpacing: 1.5,
                    }}>▶ NEXT</button>
                  )}

                  <button onClick={reset} style={{ padding: "6px 14px", background: "transparent", border: "1px solid #1e3a5f", borderRadius: 8, color: "#475569", fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>🔄 Reset</button>

                  {history.length > 0 && (
                    <div style={{ width: 155 }}>
                      <div style={{ fontSize: 10, color: "#1e3a5f", letterSpacing: 2, marginBottom: 4, fontWeight: 700 }}>LAST ROUNDS</div>
                      {history.map((r, i) => (
                        <div key={i} style={{ fontSize: 11, color: "#334155", padding: "3px 0", borderBottom: "1px solid #0f1f30", lineHeight: 1.3 }}>
                          {r.res}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Player 2 — always right */}
                <div>
                  <div style={{ textAlign: "center", marginBottom: 8, fontSize: 13, color: "#f0c040", fontWeight: 700, letterSpacing: 2 }}>
                    {turn === "p1" && activePlayer === 2 ? "PLAYER 2 — TAP A STAT" : "PLAYER 2"}
                  </div>
                  {turn === "done" && result?.p2Card
                    ? <Card card={result.p2Card} selectedStat={result.stat} onSelectStat={() => {}} />
                    : turn === "p1" && activePlayer === 1
                      ? <CardBack color="#f0c040" label="PLAYER 2" />
                      : <Card card={cardB} selectedStat={null}
                          onSelectStat={turn === "p1" && activePlayer === 2 ? chooseStat : () => {}} />
                  }
                </div>

              </div>

              <div style={{ textAlign: "center", marginTop: 18, fontSize: 12, color: "#334155" }}>
                {turn === "p1" && "Player " + activePlayer + " is choosing — tap a stat to play it"}
                {turn === "done" && "Winner keeps both cards — they go to the back of the hand!"}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
