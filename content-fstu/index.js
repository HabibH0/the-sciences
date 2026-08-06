// "From the Start" course — module registry, mirroring content/index.js's
// pattern exactly. Modules unlock in array order (see isModuleUnlocked in
// content/index.js): Nouns (includes the Introduction lesson), Verbs,
// Particles (includes the Supplement and Summary lessons) -- Unit 1. Then
// Unit 2's two sections: "The Nominal Sentence" (الجملة الاسمية) and "The
// Verbal Sentence" (الجملة الفعلية, ending in its own review-quiz lesson).
// Units 3-4 follow the same pattern (modules 06-11), each unit split across
// its book sections. Unit 5 (modules 12-18) covers the جُمْلَةٌ صُغْرَى,
// اِسْمٌ مَوْصُوْلٌ, اِسْمٌ مُؤَوَّلٌ and the verbal-phrases Supplement, one
// module per book Section with a "المراجعة" review module closing each
// (12-14 = Section 1, 15 = Section 2, 16-18 = Section 3). Unit 6 (modules
// 19-21) covers the six ways of joining independent sentences together
// (نِدَاء, قَسَم, شَرْط, جَوَابُ الْأَمْرِ/النَّهْيِ, تَعْلِيْلِيَّة,
// اِسْتِدْرَاكِيَّة), with its own review closing module 21.
import fNouns from './module-01.js';
import fVerbs from './module-02.js';
import fParticles from './module-03.js';
import fJumlaIsmiyya from './module-04.js';
import fJumlaFiliyya from './module-05.js';
import fNatIsharaAtf from './module-06.js';
import fBadalIdafaAdad from './module-07.js';
import fShibhJumla from './module-08.js';
import fDamaIr from './module-09.js';
import fIstifham from './module-10.js';
import fTawkid from './module-11.js';
import fSughraKhabarHal from './module-12.js';
import fSughraAtfBadalMudaf from './module-13.js';
import fSughraNat from './module-14.js';
import fIsmMawsul from './module-15.js';
import fIsmMuawwalMubtadaFail from './module-16.js';
import fIsmMuawwalRemainingSlots from './module-17.js';
import fIbaratFiliyya from './module-18.js';
import fNidaQasam from './module-19.js';
import fJumlaShart from './module-20.js';
import fJawabTaililiyyaIstidrakiyya from './module-21.js';

export const MODULES = [
  fNouns, fVerbs, fParticles, fJumlaIsmiyya, fJumlaFiliyya,
  fNatIsharaAtf, fBadalIdafaAdad, fShibhJumla, fDamaIr,
  fIstifham, fTawkid, fSughraKhabarHal, fSughraAtfBadalMudaf, fSughraNat,
  fIsmMawsul, fIsmMuawwalMubtadaFail, fIsmMuawwalRemainingSlots, fIbaratFiliyya,
  fNidaQasam, fJumlaShart, fJawabTaililiyyaIstidrakiyya,
];
