var dictsuffixesraw = '' +
'; ==========================================================================\n' +
'; "dictSuffixes"\n' +
'; Portions (c) 2002 QAMUS LLC (www.qamus.org),\n' +
'; (c) 2002 Trustees of the University of Pennsylvania\n' +
';\n' +
'; This program is free software; you can redistribute it and/or\n' +
'; modify it under the terms of the GNU General Public License\n' +
'; as published by the Free Software Foundation version 2.\n' +
';\n' +
'; This program is distributed in the hope that it will be useful,\n' +
'; but WITHOUT ANY WARRANTY; without even the implied warranty of\n' +
'; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n' +
'; GNU General Public License for more details (../gpl.txt).\n' +
';\n' +
'; You should have received a copy of the GNU General Public License\n' +
'; along with this program; if not, write to the Free Software\n' +
'; Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.\n' +
';\n' +
'; You can contact LDC by sending electronic mail to: ldc@ldc.upenn.edu\n' +
'; or by writing to:\n' +
';                Linguistic Data Consortium\n' +
';                3600 Market Street\n' +
';                Suite 810\n' +
';                Philadelphia, PA, 19104-2653, USA.\n' +
';\n' +
'; Contents: Each entry consists of four tab-delimited fields:\n' +
'; (1) the suffix (or concatenation of suffixes) WITHOUT short vowels and diacritics\n' +
'; (2) the suffix (or concatenation of suffixes) WITH    short vowels and diacritics\n' +
'; (3) its morphological category (for controlling its compatibility with prefixes & stems)\n' +
'; (4) its English gloss(es): includes POS data within tags <pos>...</pos>\n' +
'; ==========================================================================\n' +
';\n' +
'; null suffix (all fields empty except for morph_category)\n' +
'Suff-0\n' +
';\n' +
'; imperative (CV = command verb; PV = perfect verb; IV = imperfect verb)\n' +
'o	CVSuff-o	you <verb>                 <pos>+o/CVSUFF_SUBJ:2MS</pos>\n' +
'h	ohu	CVSuff-oh	you <verb> it/him          <pos>+o/CVSUFF_SUBJ:2MS+hu/CVSUFF_DO:3MS</pos>\n' +
'hmA	ohumA	CVSuff-oh	you <verb> them (both)     <pos>+o/CVSUFF_SUBJ:2MS+humA/CVSUFF_DO:3D</pos>\n' +
'hm	ohum	CVSuff-oh	you <verb> them            <pos>+o/CVSUFF_SUBJ:2MS+hum/CVSUFF_DO:3MP</pos>\n' +
'hA	ohA	CVSuff-oh	you <verb> it/them/her     <pos>+o/CVSUFF_SUBJ:2MS+hA/CVSUFF_DO:3FS</pos>\n' +
'hn	ohun~a	CVSuff-oh	you <verb> them            <pos>+o/CVSUFF_SUBJ:2MS+hun~a/CVSUFF_DO:3FP</pos>\n' +
'ny	oniy	CVSuff-oh	you <verb> me              <pos>+o/CVSUFF_SUBJ:2MS+niy/CVSUFF_DO:1S</pos>\n' +
'nA	onA	CVSuff-oh	you <verb> us              <pos>+o/CVSUFF_SUBJ:2MS+nA/CVSUFF_DO:1P</pos>\n' +
';\n' +
'; perfect verb, -a suffix\n' +
'a	PVSuff-a	he/it <verb>               <pos>+a/PVSUFF_SUBJ:3MS</pos>\n' +
';\n' +
'; perfect verb, null suffix: banaY\n' +
'PVSuff-0a	he/it <verb>               <pos>+(null)/PVSUFF_SUBJ:3MS</pos>\n' +
'; perfect verb, null suffix: banA-h, daEA-h\n' +
'h	hu	PVSuff-0ah	he/it <verb> it/him        <pos>+(null)/PVSUFF_SUBJ:3MS+hu/PVSUFF_DO:3MS</pos>\n' +
'hmA	humA	PVSuff-0ah	he/it <verb> them (both)   <pos>+(null)/PVSUFF_SUBJ:3MS+humA/PVSUFF_DO:3D</pos>\n' +
'hm	hum	PVSuff-0ah	he/it <verb> them          <pos>+(null)/PVSUFF_SUBJ:3MS+hum/PVSUFF_DO:3MP</pos>\n' +
'hA	hA	PVSuff-0ah	he/it <verb> it/them/her   <pos>+(null)/PVSUFF_SUBJ:3MS+hA/PVSUFF_DO:3FS</pos>\n' +
'hn	hun~a	PVSuff-0ah	he/it <verb> them          <pos>+(null)/PVSUFF_SUBJ:3MS+hun~a/PVSUFF_DO:3FP</pos>\n' +
'k	ka	PVSuff-0ah	he/it <verb> you           <pos>+(null)/PVSUFF_SUBJ:3MS+ka/PVSUFF_DO:2MS</pos>\n' +
'k	ki	PVSuff-0ah	he/it <verb> you           <pos>+(null)/PVSUFF_SUBJ:3MS+ki/PVSUFF_DO:2FS</pos>\n' +
'kmA	kumA	PVSuff-0ah	he/it <verb> you (both)    <pos>+(null)/PVSUFF_SUBJ:3MS+kumA/PVSUFF_DO:2D</pos>\n' +
'km	kum	PVSuff-0ah	he/it <verb> you           <pos>+(null)/PVSUFF_SUBJ:3MS+kum/PVSUFF_DO:2MP</pos>\n' +
'kn	kun~a	PVSuff-0ah	he/it <verb> you           <pos>+(null)/PVSUFF_SUBJ:3MS+kun~a/PVSUFF_DO:2FP</pos>\n' +
'ny	niy	PVSuff-0ah	he/it <verb> me            <pos>+(null)/PVSUFF_SUBJ:3MS+niy/PVSUFF_DO:1S</pos>\n' +
'nA	nA	PVSuff-0ah	he/it <verb> us            <pos>+(null)/PVSUFF_SUBJ:3MS+nA/PVSUFF_DO:1P</pos>\n' +
';\n' +
'; =====================================================================\n' +
'; NOUN SUFFIXES\n' +
'; =====================================================================\n' +
';\n' +
';=== case\n' +
';\n' +
';	u	NSuff-u	[def.nom.]   <pos>+u/CASE_DEF_NOM</pos>\n' +
';	a	NSuff-a	[def.acc.]   <pos>+a/CASE_DEF_ACC</pos>\n' +
';	i	NSuff-i	[def.gen.]   <pos>+i/CASE_DEF_GEN</pos>\n' +
';\n' +
';	N	NSuff-N	[indef.nom.] <pos>+N/CASE_INDEF_NOM</pos>\n' +
';	F	NSuff-F	[indef.acc.] <pos>+F/CASE_INDEF_ACC</pos>\n' +
';	K	NSuff-K	[indef.gen.] <pos>+K/CASE_INDEF_GEN</pos>\n' +
';\n' +
'; ==========\n' +
'; fem. dual: acc./gen.\n' +
'tyn	atayoni	NSuff-tayn	two <pos>+atayoni/NSUFF_FEM_DU_ACCGEN</pos>\n' +
';\n' +
'; ==========\n' +
'; feminine dual: nom.\n' +
'tAn	atAni	NSuff-atAn	two <pos>+atAni/NSUFF_FEM_DU_NOM</pos>\n' +
';\n' +
'; ==========\n' +
'; feminine dual: poss., nom.\n' +
'tA	atA	NSuff-atAh	two                       <pos>+atA/NSUFF_FEM_DU_NOM_POSS</pos>\n' +
'tAh	atAhu	NSuff-atAh	his/its two               <pos>+atA/NSUFF_FEM_DU_NOM_POSS+hu/POSS_PRON_3MS</pos>\n' +
'tAhmA	atAhumA	NSuff-atAh	their two                 <pos>+atA/NSUFF_FEM_DU_NOM_POSS+humA/POSS_PRON_3D</pos>\n' +
'tAhm	atAhum	NSuff-atAh	their two                 <pos>+atA/NSUFF_FEM_DU_NOM_POSS+hum/POSS_PRON_3MP</pos>\n' +
'tAhA	atAhA	NSuff-atAh	its/their/her two         <pos>+atA/NSUFF_FEM_DU_NOM_POSS+hA/POSS_PRON_3FS</pos>\n' +
'tAhn	atAhun~a	NSuff-atAh	their two                 <pos>+atA/NSUFF_FEM_DU_NOM_POSS+hun~a/POSS_PRON_3FP</pos>\n' +
'tAk	atAka	NSuff-atAh	your two                  <pos>+atA/NSUFF_FEM_DU_NOM_POSS+ka/POSS_PRON_2MS</pos>\n' +
'tAk	atAki	NSuff-atAh	your two                  <pos>+atA/NSUFF_FEM_DU_NOM_POSS+ki/POSS_PRON_2FS</pos>\n' +
'tAkmA	atAkumA	NSuff-atAh	your two                  <pos>+atA/NSUFF_FEM_DU_NOM_POSS+kumA/POSS_PRON_2D</pos>\n' +
'tAkm	atAkum	NSuff-atAh	your two                  <pos>+atA/NSUFF_FEM_DU_NOM_POSS+kum/POSS_PRON_2MP</pos>\n' +
'tAkn	atAkun~a	NSuff-atAh	your two                  <pos>+atA/NSUFF_FEM_DU_NOM_POSS+kun~a/POSS_PRON_2FP</pos>\n' +
'tAy	atAya	NSuff-atAh	my two                    <pos>+atA/NSUFF_FEM_DU_NOM_POSS+ya/POSS_PRON_1S</pos>\n' +
'tAnA	atAnA	NSuff-atAh	our two                   <pos>+atA/NSUFF_FEM_DU_NOM_POSS+nA/POSS_PRON_1P</pos>\n' +
';\n' +
'; ==========\n' +
'; feminine dual: poss., acc./gen.\n' +
'ty	atayo	NSuff-tay	two                       <pos>+atayo/NSUFF_FEM_DU_ACCGEN_POSS</pos>\n' +
'tyh	atayohi	NSuff-tay	his/its two               <pos>+atayo/NSUFF_FEM_DU_ACCGEN_POSS+hu/POSS_PRON_3MS</pos>\n' +
'tyhmA	atayohimA	NSuff-tay	their two                 <pos>+atayo/NSUFF_FEM_DU_ACCGEN_POSS+humA/POSS_PRON_3D</pos>\n' +
'tyhm	atayohim	NSuff-tay	their two                 <pos>+atayo/NSUFF_FEM_DU_ACCGEN_POSS+hum/POSS_PRON_3MP</pos>\n' +
'tyhA	atayohA	NSuff-tay	its/their/her two         <pos>+atayo/NSUFF_FEM_DU_ACCGEN_POSS+hA/POSS_PRON_3FS</pos>\n' +
'tyhn	atayohin~a	NSuff-tay	their two                 <pos>+atayo/NSUFF_FEM_DU_ACCGEN_POSS+hun~a/POSS_PRON_3FP</pos>\n' +
'tyk	atayoka	NSuff-tay	your two                  <pos>+atayo/NSUFF_FEM_DU_ACCGEN_POSS+ka/POSS_PRON_2MS</pos>\n' +
'tyk	atayoki	NSuff-tay	your two                  <pos>+atayo/NSUFF_FEM_DU_ACCGEN_POSS+ki/POSS_PRON_2FS</pos>\n' +
'tykmA	atayokumA	NSuff-tay	your two                  <pos>+atayo/NSUFF_FEM_DU_ACCGEN_POSS+kumA/POSS_PRON_2D</pos>\n' +
'tykm	atayokum	NSuff-tay	your two                  <pos>+atayo/NSUFF_FEM_DU_ACCGEN_POSS+kum/POSS_PRON_2MP</pos>\n' +
'tykn	atayokun~a	NSuff-tay	your two                  <pos>+atayo/NSUFF_FEM_DU_ACCGEN_POSS+kun~a/POSS_PRON_2FP</pos>\n' +
'ty	atay~a	NSuff-tay	my two                    <pos>+atayo/NSUFF_FEM_DU_ACCGEN_POSS+ya/POSS_PRON_1S</pos>\n' +
'tynA	atayonA	NSuff-tay	our two                   <pos>+atayo/NSUFF_FEM_DU_ACCGEN_POSS+nA/POSS_PRON_1P</pos>\n' +
';\n' +
'; ==========\n' +
'; fem.sg.\n' +
'p	ap	NSuff-ap	[fem.sg.] <pos>+ap/NSUFF_FEM_SG</pos>\n' +
';\n' +
';=== case\n' +
';p	apu	NSuff-apu	[fem.sg.] <pos>+ap/NSUFF_FEM_SG+u/CASE_DEF_NOM</pos>\n' +
';p	apa	NSuff-apa	[fem.sg.] <pos>+ap/NSUFF_FEM_SG+a/CASE_DEF_ACC</pos>\n' +
';p	api	NSuff-api	[fem.sg.] <pos>+ap/NSUFF_FEM_SG+i/CASE_DEF_GEN</pos>\n' +
';p	apN	NSuff-apN	[fem.sg.] <pos>+ap/NSUFF_FEM_SG+N/CASE_INDEF_NOM</pos>\n' +
';p	apF	NSuff-apF	[fem.sg.] <pos>+ap/NSUFF_FEM_SG+F/CASE_INDEF_ACC</pos>\n' +
';p	apK	NSuff-apK	[fem.sg.] <pos>+ap/NSUFF_FEM_SG+K/CASE_INDEF_GEN</pos>\n' +
';\n' +
'; ==========\n' +
'; fem.sg. poss.\n' +
'th	ath	NSuff-ath	his/its       <pos>+ap/NSUFF_FEM_SG+hu/POSS_PRON_3MS</pos>\n' +
'thmA	athmA	NSuff-ath	their         <pos>+ap/NSUFF_FEM_SG+humA/POSS_PRON_3D</pos>\n' +
'thm	athm	NSuff-ath	their         <pos>+ap/NSUFF_FEM_SG+hum/POSS_PRON_3MP</pos>\n' +
'thA	athA	NSuff-ath	its/their/her <pos>+ap/NSUFF_FEM_SG+hA/POSS_PRON_3FS</pos>\n' +
'thn	athn~a	NSuff-ath	their         <pos>+ap/NSUFF_FEM_SG+hun~a/POSS_PRON_3FP</pos>\n' +
'tk	atka	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+ka/POSS_PRON_2MS</pos>\n' +
'tk	atki	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+ki/POSS_PRON_2FS</pos>\n' +
'tkmA	atkumA	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+kumA/POSS_PRON_2D</pos>\n' +
'tkm	atkum	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+kum/POSS_PRON_2MP</pos>\n' +
'tkn	atkun~a	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+kun~a/POSS_PRON_2FP</pos>\n' +
'ty	atiy	NSuff-ath	my            <pos>+ap/NSUFF_FEM_SG+iy/POSS_PRON_1S</pos>\n' +
'tnA	atnA	NSuff-ath	our           <pos>+ap/NSUFF_FEM_SG+nA/POSS_PRON_1P</pos>\n' +
';\n' +
';=== case (keep one instance of "atiy" if you comment out the above set)\n' +
';th	atuhu	NSuff-ath	his/its       <pos>+ap/NSUFF_FEM_SG+u/CASE_DEF_NOM+hu/POSS_PRON_3MS</pos>\n' +
';thmA	atuhumA	NSuff-ath	their         <pos>+ap/NSUFF_FEM_SG+u/CASE_DEF_NOM+humA/POSS_PRON_3D</pos>\n' +
';thm	atuhum	NSuff-ath	their         <pos>+ap/NSUFF_FEM_SG+u/CASE_DEF_NOM+hum/POSS_PRON_3MP</pos>\n' +
';thA	atuhA	NSuff-ath	its/their/her <pos>+ap/NSUFF_FEM_SG+u/CASE_DEF_NOM+hA/POSS_PRON_3FS</pos>\n' +
';thn	atuhun~a	NSuff-ath	their         <pos>+ap/NSUFF_FEM_SG+u/CASE_DEF_NOM+hun~a/POSS_PRON_3FP</pos>\n' +
';tk	atuka	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+u/CASE_DEF_NOM+ka/POSS_PRON_2MS</pos>\n' +
';tk	atuki	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+u/CASE_DEF_NOM+ki/POSS_PRON_2FS</pos>\n' +
';tkmA	atukumA	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+u/CASE_DEF_NOM+kumA/POSS_PRON_2D</pos>\n' +
';tkm	atukum	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+u/CASE_DEF_NOM+kum/POSS_PRON_2MP</pos>\n' +
';tkn	atukun~a	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+u/CASE_DEF_NOM+kun~a/POSS_PRON_2FP</pos>\n' +
';tnA	atunA	NSuff-ath	our           <pos>+ap/NSUFF_FEM_SG+u/CASE_DEF_NOM+nA/POSS_PRON_1P</pos>\n' +
';;\n' +
';th	atahu	NSuff-ath	his/its       <pos>+ap/NSUFF_FEM_SG+a/CASE_DEF_ACC+hu/POSS_PRON_3MS</pos>\n' +
';thmA	atahumA	NSuff-ath	their         <pos>+ap/NSUFF_FEM_SG+a/CASE_DEF_ACC+humA/POSS_PRON_3D</pos>\n' +
';thm	atahum	NSuff-ath	their         <pos>+ap/NSUFF_FEM_SG+a/CASE_DEF_ACC+hum/POSS_PRON_3MP</pos>\n' +
';thA	atahA	NSuff-ath	its/their/her <pos>+ap/NSUFF_FEM_SG+a/CASE_DEF_ACC+hA/POSS_PRON_3FS</pos>\n' +
';thn	atahun~a	NSuff-ath	their         <pos>+ap/NSUFF_FEM_SG+a/CASE_DEF_ACC+hun~a/POSS_PRON_3FP</pos>\n' +
';tk	ataka	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+a/CASE_DEF_ACC+ka/POSS_PRON_2MS</pos>\n' +
';tk	ataki	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+a/CASE_DEF_ACC+ki/POSS_PRON_2FS</pos>\n' +
';tkmA	atakumA	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+a/CASE_DEF_ACC+kumA/POSS_PRON_2D</pos>\n' +
';tkm	atakum	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+a/CASE_DEF_ACC+kum/POSS_PRON_2MP</pos>\n' +
';tkn	atakun~a	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+a/CASE_DEF_ACC+kun~a/POSS_PRON_2FP</pos>\n' +
';tnA	atanA	NSuff-ath	our           <pos>+ap/NSUFF_FEM_SG+a/CASE_DEF_ACC+nA/POSS_PRON_1P</pos>\n' +
';;\n' +
';th	atihi	NSuff-ath	his/its       <pos>+ap/NSUFF_FEM_SG+i/CASE_DEF_GEN+hu/POSS_PRON_3MS</pos>\n' +
';thmA	atihimA	NSuff-ath	their         <pos>+ap/NSUFF_FEM_SG+i/CASE_DEF_GEN+humA/POSS_PRON_3D</pos>\n' +
';thm	atihim	NSuff-ath	their         <pos>+ap/NSUFF_FEM_SG+i/CASE_DEF_GEN+hum/POSS_PRON_3MP</pos>\n' +
';thA	atihA	NSuff-ath	its/their/her <pos>+ap/NSUFF_FEM_SG+i/CASE_DEF_GEN+hA/POSS_PRON_3FS</pos>\n' +
';thn	atihin~a	NSuff-ath	their         <pos>+ap/NSUFF_FEM_SG+i/CASE_DEF_GEN+hun~a/POSS_PRON_3FP</pos>\n' +
';tk	atika	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+i/CASE_DEF_GEN+ka/POSS_PRON_2MS</pos>\n' +
';tk	atiki	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+i/CASE_DEF_GEN+ki/POSS_PRON_2FS</pos>\n' +
';tkmA	atikumA	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+i/CASE_DEF_GEN+kumA/POSS_PRON_2D</pos>\n' +
';tkm	atikum	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+i/CASE_DEF_GEN+kum/POSS_PRON_2MP</pos>\n' +
';tkn	atikun~a	NSuff-ath	your          <pos>+ap/NSUFF_FEM_SG+i/CASE_DEF_GEN+kun~a/POSS_PRON_2FP</pos>\n' +
';tnA	atinA	NSuff-ath	our           <pos>+ap/NSUFF_FEM_SG+i/CASE_DEF_GEN+nA/POSS_PRON_1P</pos>\n' +
';\n' +
';\n' +
';\n' +
'; ==========\n' +
'; masc.du., acc./gen.\n' +
'yn	ayoni	NSuff-ayn	two                      <pos>+ayoni/NSUFF_MASC_DU_ACCGEN</pos>\n' +
';\n' +
'; ==========\n' +
'; masc.du., acc./gen., poss.\n' +
'y	ayo	NSuff-ayh	two                        <pos>+ayo/NSUFF_MASC_DU_ACCGEN_POSS</pos>\n' +
'yh	ayohi	NSuff-ayh	his/its two                <pos>+ayo/NSUFF_MASC_DU_ACCGEN+hu/POSS_PRON_3MS</pos>\n' +
'yhmA	ayohimA	NSuff-ayh	their two                  <pos>+ayo/NSUFF_MASC_DU_ACCGEN+humA/POSS_PRON_3D</pos>\n' +
'yhm	ayohim	NSuff-ayh	their two                  <pos>+ayo/NSUFF_MASC_DU_ACCGEN+hum/POSS_PRON_3MP</pos>\n' +
'yhA	ayohA	NSuff-ayh	its/their/her two          <pos>+ayo/NSUFF_MASC_DU_ACCGEN+hA/POSS_PRON_3FS</pos>\n' +
'yhn	ayohin~a	NSuff-ayh	their two                  <pos>+ayo/NSUFF_MASC_DU_ACCGEN+hun~a/POSS_PRON_3FP</pos>\n' +
'yk	ayoka	NSuff-ayh	your two                   <pos>+ayo/NSUFF_MASC_DU_ACCGEN+ka/POSS_PRON_2MS</pos>\n' +
'yk	ayoki	NSuff-ayh	your two                   <pos>+ayo/NSUFF_MASC_DU_ACCGEN+ki/POSS_PRON_2FS</pos>\n' +
'ykmA	ayokumA	NSuff-ayh	your two                   <pos>+ayo/NSUFF_MASC_DU_ACCGEN+kumA/POSS_PRON_2D</pos>\n' +
'ykm	ayokum	NSuff-ayh	your two                   <pos>+ayo/NSUFF_MASC_DU_ACCGEN+kum/POSS_PRON_2MP</pos>\n' +
'ykn	ayokun~a	NSuff-ayh	your two                   <pos>+ayo/NSUFF_MASC_DU_ACCGEN+kun~a/POSS_PRON_2FP</pos>\n' +
'y	ay~a	NSuff-ayh	my two                     <pos>+ayo/NSUFF_MASC_DU_ACCGEN+ya/POSS_PRON_1S</pos>\n' +
'ynA	ayonA	NSuff-ayh	our two                    <pos>+ayo/NSUFF_MASC_DU_ACCGEN+nA/POSS_PRON_1P</pos>\n' +
';\n' +
'; ==========\n' +
'; masc.acc., indef.\n' +
'A	AF	NSuff-AF	[acc.indef.]               <pos>+AF/NSUFF_MASC_SG_ACC_INDEF</pos>\n' +
';\n' +
'; ==========\n' +
'; "-Ani" masc.du., nom.\n' +
'An	Ani	NSuff-An	two                        <pos>+Ani/NSUFF_MASC_DU_NOM</pos>\n' +
';\n' +
'; ==========\n' +
'; masc.du., nom., poss.\n' +
'A	A	NSuff-Ah	two                        <pos>+A/NSUFF_MASC_DU_NOM_POSS</pos>\n' +
'Ah	Ahu	NSuff-Ah	its/his two                <pos>+A/NSUFF_MASC_DU_NOM+hu/POSS_PRON_3MS</pos>\n' +
'AhmA	AhumA	NSuff-Ah	their two                  <pos>+A/NSUFF_MASC_DU_NOM+humA/POSS_PRON_3D</pos>\n' +
'Ahm	Ahum	NSuff-Ah	their two                  <pos>+A/NSUFF_MASC_DU_NOM+hum/POSS_PRON_3MP</pos>\n' +
'AhA	AhA	NSuff-Ah	its/their/her two          <pos>+A/NSUFF_MASC_DU_NOM+hA/POSS_PRON_3FS</pos>\n' +
'Ahn	Ahun~a	NSuff-Ah	their two                  <pos>+A/NSUFF_MASC_DU_NOM+hun~a/POSS_PRON_3FP</pos>\n' +
'Ak	Aka	NSuff-Ah	your two                   <pos>+A/NSUFF_MASC_DU_NOM+ka/POSS_PRON_2MS</pos>\n' +
'Ak	Aki	NSuff-Ah	your two                   <pos>+A/NSUFF_MASC_DU_NOM+ki/POSS_PRON_2FS</pos>\n' +
'AkmA	AkumA	NSuff-Ah	your two                   <pos>+A/NSUFF_MASC_DU_NOM+kumA/POSS_PRON_2D</pos>\n' +
'Akm	Akum	NSuff-Ah	your two                   <pos>+A/NSUFF_MASC_DU_NOM+kum/POSS_PRON_2MP</pos>\n' +
'Akn	Akun~a	NSuff-Ah	your two                   <pos>+A/NSUFF_MASC_DU_NOM+kun~a/POSS_PRON_2FP</pos>\n' +
'Ay	Aya	NSuff-Ah	my two                     <pos>+A/NSUFF_MASC_DU_NOM+ya/POSS_PRON_1S</pos>\n' +
'AnA	AnA	NSuff-Ah	our two                    <pos>+A/NSUFF_MASC_DU_NOM+nA/POSS_PRON_1P</pos>\n' +
';\n' +
'; ==========\n' +
'; fem.pl.\n' +
'At	At	NSuff-At	[fem.pl.]                  <pos>+At/NSUFF_FEM_PL</pos>\n' +
';\n' +
';=== case\n' +
';At	Atu	NSuff-Atu	[fem.pl.]                  <pos>+At/NSUFF_FEM_PL+u/CASE_DEF_NOM</pos>\n' +
';At	Ati	NSuff-Ati	[fem.pl.]                  <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_ACC</pos>\n' +
';At	Ati	NSuff-Ati	[fem.pl.]                  <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_GEN</pos>\n' +
';At	AtN	NSuff-AtN	[fem.pl.]                  <pos>+At/NSUFF_FEM_PL+N/CASE_INDEF_NOM</pos>\n' +
';At	AtK	NSuff-AtK	[fem.pl.]                  <pos>+At/NSUFF_FEM_PL+K/CASE_INDEF_ACC</pos>\n' +
';At	AtK	NSuff-AtK	[fem.pl.]                  <pos>+At/NSUFF_FEM_PL+K/CASE_INDEF_GEN</pos>\n' +
';\n' +
'; ==========\n' +
'; fem.pl., poss.\n' +
'Ath	Ath	NSuff-Ath	[fem.pl.] its/his          <pos>+At/NSUFF_FEM_PL+hu/POSS_PRON_3MS</pos>\n' +
'AthmA	AthmA	NSuff-Ath	[fem.pl.] their            <pos>+At/NSUFF_FEM_PL+humA/POSS_PRON_3D</pos>\n' +
'Athm	Athm	NSuff-Ath	[fem.pl.] their            <pos>+At/NSUFF_FEM_PL+hum/POSS_PRON_3MP</pos>\n' +
'AthA	AthA	NSuff-Ath	[fem.pl.] its/their/her    <pos>+At/NSUFF_FEM_PL+hA/POSS_PRON_3FS</pos>\n' +
'Athn	Athn~a	NSuff-Ath	[fem.pl.] their            <pos>+At/NSUFF_FEM_PL+hun~a/POSS_PRON_3FP</pos>\n' +
'Atk	Atka	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+ka/POSS_PRON_2MS</pos>\n' +
'Atk	Atki	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+ki/POSS_PRON_2FS</pos>\n' +
'AtkmA	AtkumA	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+kumA/POSS_PRON_2D</pos>\n' +
'Atkm	Atkum	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+kum/POSS_PRON_2MP</pos>\n' +
'Atkn	Atkun~a	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+kun~a/POSS_PRON_2FP</pos>\n' +
'Aty	Atiy	NSuff-Ath	[fem.pl.] my               <pos>+At/NSUFF_FEM_PL+iy/POSS_PRON_1S</pos>\n' +
'AtnA	AtnA	NSuff-Ath	[fem.pl.] our              <pos>+At/NSUFF_FEM_PL+nA/POSS_PRON_1P</pos>\n' +
';\n' +
';=== case (keep one instance of "Atiy" if you comment out the above set)\n' +
';Ath	Atuhu	NSuff-Ath	[fem.pl.] its/his          <pos>+At/NSUFF_FEM_PL+u/CASE_DEF_NOM+hu/POSS_PRON_3MS</pos>\n' +
';AthmA	AtuhumA	NSuff-Ath	[fem.pl.] their            <pos>+At/NSUFF_FEM_PL+u/CASE_DEF_NOM+humA/POSS_PRON_3D</pos>\n' +
';Athm	Atuhum	NSuff-Ath	[fem.pl.] their            <pos>+At/NSUFF_FEM_PL+u/CASE_DEF_NOM+hum/POSS_PRON_3MP</pos>\n' +
';AthA	AtuhA	NSuff-Ath	[fem.pl.] its/their/her    <pos>+At/NSUFF_FEM_PL+u/CASE_DEF_NOM+hA/POSS_PRON_3FS</pos>\n' +
';Athn	Atuhun~a	NSuff-Ath	[fem.pl.] their            <pos>+At/NSUFF_FEM_PL+u/CASE_DEF_NOM+hun~a/POSS_PRON_3FP</pos>\n' +
';Atk	Atuka	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+u/CASE_DEF_NOM+ka/POSS_PRON_2MS</pos>\n' +
';Atk	Atuki	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+u/CASE_DEF_NOM+ki/POSS_PRON_2FS</pos>\n' +
';AtkmA	AtukumA	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+u/CASE_DEF_NOM+kumA/POSS_PRON_2D</pos>\n' +
';Atkm	Atukum	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+u/CASE_DEF_NOM+kum/POSS_PRON_2MP</pos>\n' +
';Atkn	Atukun~a	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+u/CASE_DEF_NOM+kun~a/POSS_PRON_2FP</pos>\n' +
';AtnA	AtunA	NSuff-Ath	[fem.pl.] our              <pos>+At/NSUFF_FEM_PL+u/CASE_DEF_NOM+nA/POSS_PRON_1P</pos>\n' +
';;\n' +
';Ath	Atihi	NSuff-Ath	[fem.pl.] its/his          <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_ACC+hu/POSS_PRON_3MS</pos>\n' +
';AthmA	AtihimA	NSuff-Ath	[fem.pl.] their            <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_ACC+humA/POSS_PRON_3D</pos>\n' +
';Athm	Atihim	NSuff-Ath	[fem.pl.] their            <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_ACC+hum/POSS_PRON_3MP</pos>\n' +
';AthA	AtihA	NSuff-Ath	[fem.pl.] its/their/her    <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_ACC+hA/POSS_PRON_3FS</pos>\n' +
';Athn	Atihin~a	NSuff-Ath	[fem.pl.] their            <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_ACC+hun~a/POSS_PRON_3FP</pos>\n' +
';Atk	Atika	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_ACC+ka/POSS_PRON_2MS</pos>\n' +
';Atk	Atiki	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_ACC+ki/POSS_PRON_2FS</pos>\n' +
';AtkmA	AtikumA	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_ACC+kumA/POSS_PRON_2D</pos>\n' +
';Atkm	Atikum	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_ACC+kum/POSS_PRON_2MP</pos>\n' +
';Atkn	Atikun~a	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_ACC+kun~a/POSS_PRON_2FP</pos>\n' +
';AtnA	AtinA	NSuff-Ath	[fem.pl.] our              <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_ACC+nA/POSS_PRON_1P</pos>\n' +
';;\n' +
';Ath	Atihi	NSuff-Ath	[fem.pl.] its/his          <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_GEN+hu/POSS_PRON_3MS</pos>\n' +
';AthmA	AtihimA	NSuff-Ath	[fem.pl.] their            <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_GEN+humA/POSS_PRON_3D</pos>\n' +
';Athm	Atihim	NSuff-Ath	[fem.pl.] their            <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_GEN+hum/POSS_PRON_3MP</pos>\n' +
';AthA	AtihA	NSuff-Ath	[fem.pl.] its/their/her    <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_GEN+hA/POSS_PRON_3FS</pos>\n' +
';Athn	Atihin~a	NSuff-Ath	[fem.pl.] their            <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_GEN+hun~a/POSS_PRON_3FP</pos>\n' +
';Atk	Atika	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_GEN+ka/POSS_PRON_2MS</pos>\n' +
';Atk	Atiki	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_GEN+ki/POSS_PRON_2FS</pos>\n' +
';AtkmA	AtikumA	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_GEN+kumA/POSS_PRON_2D</pos>\n' +
';Atkm	Atikum	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_GEN+kum/POSS_PRON_2MP</pos>\n' +
';Atkn	Atikun~a	NSuff-Ath	[fem.pl.] your             <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_GEN+kun~a/POSS_PRON_2FP</pos>\n' +
';AtnA	AtinA	NSuff-Ath	[fem.pl.] our              <pos>+At/NSUFF_FEM_PL+i/CASE_DEF_GEN+nA/POSS_PRON_1P</pos>\n' +
';\n' +
'; fem.pl. for stems ending in >: mn$> -At = mn$|t\n' +
'|t	|t	NSuff-|t	[fem.pl.]                  <pos>+|t/NSUFF_FEM_PL</pos>\n' +
';\n' +
';=== case\n' +
';|t	|tu	NSuff-|tu	[fem.pl.]                  <pos>+|t/NSUFF_FEM_PL+u/CASE_DEF_NOM</pos>\n' +
';|t	|ti	NSuff-|ti	[fem.pl.]                  <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_ACC</pos>\n' +
';|t	|ti	NSuff-|ti	[fem.pl.]                  <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_GEN</pos>\n' +
';|t	|tN	NSuff-|tN	[fem.pl.]                  <pos>+|t/NSUFF_FEM_PL+N/CASE_INDEF_NOM</pos>\n' +
';|t	|tK	NSuff-|tK	[fem.pl.]                  <pos>+|t/NSUFF_FEM_PL+K/CASE_INDEF_ACC</pos>\n' +
';|t	|tK	NSuff-|tK	[fem.pl.]                  <pos>+|t/NSUFF_FEM_PL+K/CASE_INDEF_GEN</pos>\n' +
';\n' +
'; ==========\n' +
'; fem.pl., poss.\n' +
'|th	|th	NSuff-|th	[fem.pl.] its/his          <pos>+|t/NSUFF_FEM_PL+hu/POSS_PRON_3MS</pos>\n' +
'|thmA	|thmA	NSuff-|th	[fem.pl.] their            <pos>+|t/NSUFF_FEM_PL+humA/POSS_PRON_3D</pos>\n' +
'|thm	|thm	NSuff-|th	[fem.pl.] their            <pos>+|t/NSUFF_FEM_PL+hum/POSS_PRON_3MP</pos>\n' +
'|thA	|thA	NSuff-|th	[fem.pl.] its/their/her    <pos>+|t/NSUFF_FEM_PL+hA/POSS_PRON_3FS</pos>\n' +
'|thn	|thn~a	NSuff-|th	[fem.pl.] their            <pos>+|t/NSUFF_FEM_PL+hun~a/POSS_PRON_3FP</pos>\n' +
'|tk	|tka	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+ka/POSS_PRON_2MS</pos>\n' +
'|tk	|tki	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+ki/POSS_PRON_2FS</pos>\n' +
'|tkmA	|tkumA	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+kumA/POSS_PRON_2D</pos>\n' +
'|tkm	|tkum	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+kum/POSS_PRON_2MP</pos>\n' +
'|tkn	|tkun~a	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+kun~a/POSS_PRON_2FP</pos>\n' +
'|ty	|tiy	NSuff-|th	[fem.pl.] my               <pos>+|t/NSUFF_FEM_PL+iy/POSS_PRON_1S</pos>\n' +
'|tnA	|tnA	NSuff-|th	[fem.pl.] our              <pos>+|t/NSUFF_FEM_PL+nA/POSS_PRON_1P</pos>\n' +
';\n' +
';=== case (keep one instance of "|tiy" if you comment out the above set)\n' +
';|th	|tuhu	NSuff-|th	[fem.pl.] its/his          <pos>+|t/NSUFF_FEM_PL+u/CASE_DEF_NOM+hu/POSS_PRON_3MS</pos>\n' +
';|thmA	|tuhumA	NSuff-|th	[fem.pl.] their            <pos>+|t/NSUFF_FEM_PL+u/CASE_DEF_NOM+humA/POSS_PRON_3D</pos>\n' +
';|thm	|tuhum	NSuff-|th	[fem.pl.] their            <pos>+|t/NSUFF_FEM_PL+u/CASE_DEF_NOM+hum/POSS_PRON_3MP</pos>\n' +
';|thA	|tuhA	NSuff-|th	[fem.pl.] its/their/her    <pos>+|t/NSUFF_FEM_PL+u/CASE_DEF_NOM+hA/POSS_PRON_3FS</pos>\n' +
';|thn	|tuhun~a	NSuff-|th	[fem.pl.] their            <pos>+|t/NSUFF_FEM_PL+u/CASE_DEF_NOM+hun~a/POSS_PRON_3FP</pos>\n' +
';|tk	|tuka	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+u/CASE_DEF_NOM+ka/POSS_PRON_2MS</pos>\n' +
';|tk	|tuki	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+u/CASE_DEF_NOM+ki/POSS_PRON_2FS</pos>\n' +
';|tkmA	|tukumA	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+u/CASE_DEF_NOM+kumA/POSS_PRON_2D</pos>\n' +
';|tkm	|tukum	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+u/CASE_DEF_NOM+kum/POSS_PRON_2MP</pos>\n' +
';|tkn	|tukun~a	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+u/CASE_DEF_NOM+kun~a/POSS_PRON_2FP</pos>\n' +
';|tnA	|tunA	NSuff-|th	[fem.pl.] our              <pos>+|t/NSUFF_FEM_PL+u/CASE_DEF_NOM+nA/POSS_PRON_1P</pos>\n' +
';;\n' +
';|th	|tihi	NSuff-|th	[fem.pl.] its/his          <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_ACC+hu/POSS_PRON_3MS</pos>\n' +
';|thmA	|tihimA	NSuff-|th	[fem.pl.] their            <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_ACC+humA/POSS_PRON_3D</pos>\n' +
';|thm	|tihim	NSuff-|th	[fem.pl.] their            <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_ACC+hum/POSS_PRON_3MP</pos>\n' +
';|thA	|tihA	NSuff-|th	[fem.pl.] its/their/her    <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_ACC+hA/POSS_PRON_3FS</pos>\n' +
';|thn	|tihin~a	NSuff-|th	[fem.pl.] their            <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_ACC+hun~a/POSS_PRON_3FP</pos>\n' +
';|tk	|tika	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_ACC+ka/POSS_PRON_2MS</pos>\n' +
';|tk	|tiki	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_ACC+ki/POSS_PRON_2FS</pos>\n' +
';|tkmA	|tikumA	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_ACC+kumA/POSS_PRON_2D</pos>\n' +
';|tkm	|tikum	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_ACC+kum/POSS_PRON_2MP</pos>\n' +
';|tkn	|tikun~a	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_ACC+kun~a/POSS_PRON_2FP</pos>\n' +
';|tnA	|tinA	NSuff-|th	[fem.pl.] our              <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_ACC+nA/POSS_PRON_1P</pos>\n' +
';;\n' +
';|th	|tihi	NSuff-|th	[fem.pl.] its/his          <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_GEN+hu/POSS_PRON_3MS</pos>\n' +
';|thmA	|tihimA	NSuff-|th	[fem.pl.] their            <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_GEN+humA/POSS_PRON_3D</pos>\n' +
';|thm	|tihim	NSuff-|th	[fem.pl.] their            <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_GEN+hum/POSS_PRON_3MP</pos>\n' +
';|thA	|tihA	NSuff-|th	[fem.pl.] its/their/her    <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_GEN+hA/POSS_PRON_3FS</pos>\n' +
';|thn	|tihin~a	NSuff-|th	[fem.pl.] their            <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_GEN+hun~a/POSS_PRON_3FP</pos>\n' +
';|tk	|tika	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_GEN+ka/POSS_PRON_2MS</pos>\n' +
';|tk	|tiki	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_GEN+ki/POSS_PRON_2FS</pos>\n' +
';|tkmA	|tikumA	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_GEN+kumA/POSS_PRON_2D</pos>\n' +
';|tkm	|tikum	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_GEN+kum/POSS_PRON_2MP</pos>\n' +
';|tkn	|tikun~a	NSuff-|th	[fem.pl.] your             <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_GEN+kun~a/POSS_PRON_2FP</pos>\n' +
';|tnA	|tinA	NSuff-|th	[fem.pl.] our              <pos>+|t/NSUFF_FEM_PL+i/CASE_DEF_GEN+nA/POSS_PRON_1P</pos>\n' +
';\n' +
'; ==========\n' +
'; poss.pron (does not include "-iy")\n' +
'h	h	NSuff-h	its/his                    <pos>+hu/POSS_PRON_3MS</pos>\n' +
'hmA	hmA	NSuff-h	their                      <pos>+humA/POSS_PRON_3D</pos>\n' +
'hm	hm	NSuff-h	their                      <pos>+hum/POSS_PRON_3MP</pos>\n' +
'hA	hA	NSuff-h	its/their/her              <pos>+hA/POSS_PRON_3FS</pos>\n' +
'hn	hn~a	NSuff-h	their                      <pos>+hun~a/POSS_PRON_3FP</pos>\n' +
'k	ka	NSuff-h	your                       <pos>+ka/POSS_PRON_2MS</pos>\n' +
'k	ki	NSuff-h	your                       <pos>+ki/POSS_PRON_2FS</pos>\n' +
'kmA	kumA	NSuff-h	your                       <pos>+kumA/POSS_PRON_2D</pos>\n' +
'km	kum	NSuff-h	your                       <pos>+kum/POSS_PRON_2MP</pos>\n' +
'kn	kun~a	NSuff-h	your                       <pos>+kun~a/POSS_PRON_2FP</pos>\n' +
'nA	nA	NSuff-h	our                        <pos>+nA/POSS_PRON_1P</pos>\n' +
';\n' +
';=== case\n' +
';h	uhu	NSuff-h	its/his                    <pos>+u/CASE_DEF_NOM+hu/POSS_PRON_3MS</pos>\n' +
';hmA	uhumA	NSuff-h	their                      <pos>+u/CASE_DEF_NOM+humA/POSS_PRON_3D</pos>\n' +
';hm	uhum	NSuff-h	their                      <pos>+u/CASE_DEF_NOM+hum/POSS_PRON_3MP</pos>\n' +
';hA	uhA	NSuff-h	its/their/her              <pos>+u/CASE_DEF_NOM+hA/POSS_PRON_3FS</pos>\n' +
';hn	uhun~a	NSuff-h	their                      <pos>+u/CASE_DEF_NOM+hun~a/POSS_PRON_3FP</pos>\n' +
';k	uka	NSuff-h	your                       <pos>+u/CASE_DEF_NOM+ka/POSS_PRON_2MS</pos>\n' +
';k	uki	NSuff-h	your                       <pos>+u/CASE_DEF_NOM+ki/POSS_PRON_2FS</pos>\n' +
';kmA	ukumA	NSuff-h	your                       <pos>+u/CASE_DEF_NOM+kumA/POSS_PRON_2D</pos>\n' +
';km	ukum	NSuff-h	your                       <pos>+u/CASE_DEF_NOM+kum/POSS_PRON_2MP</pos>\n' +
';kn	ukun~a	NSuff-h	your                       <pos>+u/CASE_DEF_NOM+kun~a/POSS_PRON_2FP</pos>\n' +
';nA	unA	NSuff-h	our                        <pos>+u/CASE_DEF_NOM+nA/POSS_PRON_1P</pos>\n' +
';;\n' +
';h	ahu	NSuff-h	its/his                    <pos>+a/CASE_DEF_ACC+hu/POSS_PRON_3MS</pos>\n' +
';hmA	ahumA	NSuff-h	their                      <pos>+a/CASE_DEF_ACC+humA/POSS_PRON_3D</pos>\n' +
';hm	ahum	NSuff-h	their                      <pos>+a/CASE_DEF_ACC+hum/POSS_PRON_3MP</pos>\n' +
';hA	ahA	NSuff-h	its/their/her              <pos>+a/CASE_DEF_ACC+hA/POSS_PRON_3FS</pos>\n' +
';hn	ahun~a	NSuff-h	their                      <pos>+a/CASE_DEF_ACC+hun~a/POSS_PRON_3FP</pos>\n' +
';k	aka	NSuff-h	your                       <pos>+a/CASE_DEF_ACC+ka/POSS_PRON_2MS</pos>\n' +
';k	aki	NSuff-h	your                       <pos>+a/CASE_DEF_ACC+ki/POSS_PRON_2FS</pos>\n' +
';kmA	akumA	NSuff-h	your                       <pos>+a/CASE_DEF_ACC+kumA/POSS_PRON_2D</pos>\n' +
';km	akum	NSuff-h	your                       <pos>+a/CASE_DEF_ACC+kum/POSS_PRON_2MP</pos>\n' +
';kn	akun~a	NSuff-h	your                       <pos>+a/CASE_DEF_ACC+kun~a/POSS_PRON_2FP</pos>\n' +
';nA	anA	NSuff-h	our                        <pos>+a/CASE_DEF_ACC+nA/POSS_PRON_1P</pos>\n' +
';;\n' +
';h	ihi	NSuff-h	its/his                    <pos>+i/CASE_DEF_GEN+hu/POSS_PRON_3MS</pos>\n' +
';hmA	ihimA	NSuff-h	their                      <pos>+i/CASE_DEF_GEN+humA/POSS_PRON_3D</pos>\n' +
';hm	ihim	NSuff-h	their                      <pos>+i/CASE_DEF_GEN+hum/POSS_PRON_3MP</pos>\n' +
';hA	ihA	NSuff-h	its/their/her              <pos>+i/CASE_DEF_GEN+hA/POSS_PRON_3FS</pos>\n' +
';hn	ihin~a	NSuff-h	their                      <pos>+i/CASE_DEF_GEN+hun~a/POSS_PRON_3FP</pos>\n' +
';k	ika	NSuff-h	your                       <pos>+i/CASE_DEF_GEN+ka/POSS_PRON_2MS</pos>\n' +
';k	iki	NSuff-h	your                       <pos>+i/CASE_DEF_GEN+ki/POSS_PRON_2FS</pos>\n' +
';kmA	ikumA	NSuff-h	your                       <pos>+i/CASE_DEF_GEN+kumA/POSS_PRON_2D</pos>\n' +
';km	ikum	NSuff-h	your                       <pos>+i/CASE_DEF_GEN+kum/POSS_PRON_2MP</pos>\n' +
';kn	ikun~a	NSuff-h	your                       <pos>+i/CASE_DEF_GEN+kun~a/POSS_PRON_2FP</pos>\n' +
';nA	inA	NSuff-h	our                        <pos>+i/CASE_DEF_GEN+nA/POSS_PRON_1P</pos>\n' +
';\n' +
'; ==========\n' +
'; masc.pl., gen./acc.\n' +
'yn	iyna	NSuff-iyna	[masc.pl.]                 <pos>+iyona/NSUFF_MASC_PL_ACCGEN</pos>\n' +
';\n' +
'; ==========\n' +
'; masc.pl., gen./acc., poss.\n' +
'y	iy	NSuff-iyh	[masc.pl.]                 <pos>+iy/NSUFF_MASC_PL_ACCGEN_POSS</pos>\n' +
'yh	iyhi	NSuff-iyh	his;its                    <pos>+iy/NSUFF_MASC_PL_ACCGEN+hi/POSS_PRON_3MS</pos>\n' +
'yhmA	iyhimA	NSuff-iyh	their                      <pos>+iy/NSUFF_MASC_PL_ACCGEN+himA/POSS_PRON_3D</pos>\n' +
'yhm	iyhim	NSuff-iyh	their                      <pos>+iy/NSUFF_MASC_PL_ACCGEN+him/POSS_PRON_3MP</pos>\n' +
'yhA	iyhA	NSuff-iyh	its;their;her              <pos>+iy/NSUFF_MASC_PL_ACCGEN+hA/POSS_PRON_3FS</pos>\n' +
'yhn	iyhin~a	NSuff-iyh	their                      <pos>+iy/NSUFF_MASC_PL_ACCGEN+hin~a/POSS_PRON_3FP</pos>\n' +
'yk	iyka	NSuff-iyh	your                       <pos>+iy/NSUFF_MASC_PL_ACCGEN+ka/POSS_PRON_2MS</pos>\n' +
'yk	iyki	NSuff-iyh	your                       <pos>+iy/NSUFF_MASC_PL_ACCGEN+ki/POSS_PRON_2FS</pos>\n' +
'ykmA	iykumA	NSuff-iyh	your                       <pos>+iy/NSUFF_MASC_PL_ACCGEN+kumA/POSS_PRON_2D</pos>\n' +
'ykm	iykum	NSuff-iyh	your                       <pos>+iy/NSUFF_MASC_PL_ACCGEN+kum/POSS_PRON_2MP</pos>\n' +
'ykn	iykun~a	NSuff-iyh	your                       <pos>+iy/NSUFF_MASC_PL_ACCGEN+kun~a/POSS_PRON_2FP</pos>\n' +
'y	iy~a	NSuff-iyh	my                         <pos>+iy/NSUFF_MASC_PL_ACCGEN+ya/POSS_PRON_1S</pos>\n' +
'ynA	iynA	NSuff-iyh	our                        <pos>+iy/NSUFF_MASC_PL_ACCGEN+nA/POSS_PRON_1P</pos>\n' +
';\n' +
'; ==========\n' +
'; 1st person pos.pron.\n' +
'y	iy	NSuff-iy	my                         <pos>+iy/POSS_PRON_1S</pos>\n' +
';\n' +
'; ==========\n' +
'; "-Ani" as |-ni: maboda|-ni\n' +
'n	ni	NSuff-|-ni	two                        <pos>+Ani/NSUFF_MASC_DU_NOM</pos>\n' +
';\n' +
'NSuff-|h	two                        <pos>+A/NSUFF_MASC_DU_NOM_POSS</pos>\n' +
'h	hu	NSuff-|h	its/his two                <pos>+A/NSUFF_MASC_DU_NOM+hu/POSS_PRON_3MS</pos>\n' +
'hmA	humA	NSuff-|h	their two                  <pos>+A/NSUFF_MASC_DU_NOM+humA/POSS_PRON_3D</pos>\n' +
'hm	hum	NSuff-|h	their two                  <pos>+A/NSUFF_MASC_DU_NOM+hum/POSS_PRON_3MP</pos>\n' +
'hA	hA	NSuff-|h	its/their/her two          <pos>+A/NSUFF_MASC_DU_NOM+hA/POSS_PRON_3FS</pos>\n' +
'hn	hun~a	NSuff-|h	their two                  <pos>+A/NSUFF_MASC_DU_NOM+hun~a/POSS_PRON_3FP</pos>\n' +
'k	ka	NSuff-|h	your two                   <pos>+A/NSUFF_MASC_DU_NOM+ka/POSS_PRON_2MS</pos>\n' +
'k	ki	NSuff-|h	your two                   <pos>+A/NSUFF_MASC_DU_NOM+ki/POSS_PRON_2FS</pos>\n' +
'kmA	kumA	NSuff-|h	your two                   <pos>+A/NSUFF_MASC_DU_NOM+kumA/POSS_PRON_2D</pos>\n' +
'km	kum	NSuff-|h	your two                   <pos>+A/NSUFF_MASC_DU_NOM+kum/POSS_PRON_2MP</pos>\n' +
'kn	kun~a	NSuff-|h	your two                   <pos>+A/NSUFF_MASC_DU_NOM+kun~a/POSS_PRON_2FP</pos>\n' +
'y	ya	NSuff-|h	my two                     <pos>+A/NSUFF_MASC_DU_NOM+ya/POSS_PRON_1S</pos>\n' +
'nA	nA	NSuff-|h	our two                    <pos>+A/NSUFF_MASC_DU_NOM+nA/POSS_PRON_1P</pos>\n' +
';\n' +
'; ==========\n' +
'; masc.pl., nom.\n' +
'wn	uwna	NSuff-wn	[masc.pl.]                 <pos>+uwna/NSUFF_MASC_PL_NOM</pos>\n' +
';\n' +
'; ==========\n' +
'; masc.pl., nom., poss.\n' +
'w	uw	NSuff-wh	[masc.pl.]                 <pos>+uw/NSUFF_MASC_PL_NOM_POSS</pos>\n' +
'wh	uwhu	NSuff-wh	his;its                    <pos>+uw/NSUFF_MASC_PL_NOM+hu/POSS_PRON_3MS</pos>\n' +
'whmA	uwhumA	NSuff-wh	their                      <pos>+uw/NSUFF_MASC_PL_NOM+humA/POSS_PRON_3D</pos>\n' +
'whm	uwhum	NSuff-wh	their                      <pos>+uw/NSUFF_MASC_PL_NOM+hum/POSS_PRON_3MP</pos>\n' +
'whA	uwhA	NSuff-wh	its;their;her              <pos>+uw/NSUFF_MASC_PL_NOM+hA/POSS_PRON_3FS</pos>\n' +
'whn	uwhun~a	NSuff-wh	their                      <pos>+uw/NSUFF_MASC_PL_NOM+hun~a/POSS_PRON_3FP</pos>\n' +
'wk	uwka	NSuff-wh	your                       <pos>+uw/NSUFF_MASC_PL_NOM+ka/POSS_PRON_2MS</pos>\n' +
'wk	uwki	NSuff-wh	your                       <pos>+uw/NSUFF_MASC_PL_NOM+ki/POSS_PRON_2FS</pos>\n' +
'wkmA	uwkumA	NSuff-wh	your                       <pos>+uw/NSUFF_MASC_PL_NOM+kumA/POSS_PRON_2D</pos>\n' +
'wkm	uwkum	NSuff-wh	your                       <pos>+uw/NSUFF_MASC_PL_NOM+kum/POSS_PRON_2MP</pos>\n' +
'wkn	uwkun~a	NSuff-wh	your                       <pos>+uw/NSUFF_MASC_PL_NOM+kun~a/POSS_PRON_2FP</pos>\n' +
'y	iy~a	NSuff-wh	my                         <pos>+uw/NSUFF_MASC_PL_NOM+ya/POSS_PRON_1S</pos>\n' +
'wnA	uwnA	NSuff-wh	our                        <pos>+uw/NSUFF_MASC_PL_NOM+nA/POSS_PRON_1P</pos>\n' +
';\n' +
';\n' +
';\n' +
'; =====================================================================\n' +
'; PERFECT VERB SUFFIXES\n' +
'; =====================================================================\n' +
'; ==========\n' +
'; perfect verb DO pron.: Subject (null) is 3rd pers.masc.sg, and what remains is the Direct Object\n' +
'; (this category is incompatible with any PV stem marked as intransitive)\n' +
';\n' +
'h	ahu	PVSuff-ah	he/it <verb> it/him        <pos>+a/PVSUFF_SUBJ:3MS+hu/PVSUFF_DO:3MS</pos>\n' +
'hmA	ahumA	PVSuff-ah	he/it <verb> them (both)   <pos>+a/PVSUFF_SUBJ:3MS+humA/PVSUFF_DO:3D</pos>\n' +
'hm	ahum	PVSuff-ah	he/it <verb> them          <pos>+a/PVSUFF_SUBJ:3MS+hum/PVSUFF_DO:3MP</pos>\n' +
'hA	ahA	PVSuff-ah	he/it <verb> it/them/her   <pos>+a/PVSUFF_SUBJ:3MS+hA/PVSUFF_DO:3FS</pos>\n' +
'hn	ahun~a	PVSuff-ah	he/it <verb> them          <pos>+a/PVSUFF_SUBJ:3MS+hun~a/PVSUFF_DO:3FP</pos>\n' +
'k	aka	PVSuff-ah	he/it <verb> you           <pos>+a/PVSUFF_SUBJ:3MS+ka/PVSUFF_DO:2MS</pos>\n' +
'k	aki	PVSuff-ah	he/it <verb> you           <pos>+a/PVSUFF_SUBJ:3MS+ki/PVSUFF_DO:2FS</pos>\n' +
'kmA	akumA	PVSuff-ah	he/it <verb> you (both)    <pos>+a/PVSUFF_SUBJ:3MS+kumA/PVSUFF_DO:2D</pos>\n' +
'km	akum	PVSuff-ah	he/it <verb> you           <pos>+a/PVSUFF_SUBJ:3MS+kum/PVSUFF_DO:2MP</pos>\n' +
'kn	akun~a	PVSuff-ah	he/it <verb> you           <pos>+a/PVSUFF_SUBJ:3MS+kun~a/PVSUFF_DO:2FP</pos>\n' +
'ny	aniy	PVSuff-ah	he/it <verb> me            <pos>+a/PVSUFF_SUBJ:3MS+niy/PVSUFF_DO:1S</pos>\n' +
'nA	anA	PVSuff-ah	he/it <verb> us            <pos>+a/PVSUFF_SUBJ:3MS+nA/PVSUFF_DO:1P</pos>\n' +
';\n' +
'; ==========\n' +
'; perfect verb, suffix begins with consonant "n" so it elides with stems\n' +
'; ending in "n" (e.g. kun-~A, rather than kun-nA). Also, as a consonant,\n' +
'; it goes only with short stem of hollow verbs (e.g. qul+na qul+nA)\n' +
'n	ona	PVSuff-n	they [fem.pl.] <verb>      <pos>+na/PVSUFF_SUBJ:3FP</pos>\n' +
'nA	onA	PVSuff-n	we <verb>                  <pos>+nA/PVSUFF_SUBJ:1P</pos>\n' +
';----------------------------------------------------------------------------------------------------------------------------\n' +
'~a	PVSuff-~n	they [fem.pl.] <verb>      <pos>+na/PVSUFF_SUBJ:3FP</pos>\n' +
'A	~A	PVSuff-~n	we <verb>                  <pos>+nA/PVSUFF_SUBJ:1P</pos>\n' +
';\n' +
'; ==========\n' +
'; perfect verb suffixes that begin with consonant "n" + DO\n' +
'; (these are incompatible with intrans. verbs)\n' +
'nh	onahu	PVSuff-nh	they <verb> it/him                              <pos>+na/PVSUFF_SUBJ:3FP+hu/PVSUFF_DO:3MS</pos>\n' +
'nhmA	onahumA	PVSuff-nh	they <verb> (both of) them                      <pos>+na/PVSUFF_SUBJ:3FP+humA/PVSUFF_DO:3D</pos>\n' +
'nhm	onahum	PVSuff-nh	they <verb> them                                <pos>+na/PVSUFF_SUBJ:3FP+hum/PVSUFF_DO:3MP</pos>\n' +
'nhA	onahA	PVSuff-nh	they <verb> it/them/her                         <pos>+na/PVSUFF_SUBJ:3FP+hA/PVSUFF_DO:3FS</pos>\n' +
'nhn	onahun~a	PVSuff-nh	they <verb> them                                <pos>+na/PVSUFF_SUBJ:3FP+hun~a/PVSUFF_DO:3FP</pos>\n' +
'nk	onaka	PVSuff-nh	they <verb> you                                 <pos>+na/PVSUFF_SUBJ:3FP+ka/PVSUFF_DO:2MS</pos>\n' +
'nk	onaki	PVSuff-nh	they <verb> you                                 <pos>+na/PVSUFF_SUBJ:3FP+ki/PVSUFF_DO:2FS</pos>\n' +
'nkmA	onakumA	PVSuff-nh	they <verb> you                                 <pos>+na/PVSUFF_SUBJ:3FP+kumA/PVSUFF_DO:2D</pos>\n' +
'nkm	onakum	PVSuff-nh	they <verb> you                                 <pos>+na/PVSUFF_SUBJ:3FP+kum/PVSUFF_DO:2MP</pos>\n' +
'nkn	onakun~a	PVSuff-nh	they <verb> you                                 <pos>+na/PVSUFF_SUBJ:3FP+kun~a/PVSUFF_DO:2FP</pos>\n' +
'nny	onaniy	PVSuff-nh	they <verb> me                                  <pos>+na/PVSUFF_SUBJ:3FP+niy/PVSUFF_DO:1S</pos>\n' +
'nnA	onanA	PVSuff-nh	they <verb> us                                  <pos>+na/PVSUFF_SUBJ:3FP+nA/PVSUFF_DO:1P</pos>\n' +
';----------------------------------------------------------------------------------------------------------------------------\n' +
'h	~ahu	PVSuff-~nh	they <verb> it/him                              <pos>+na/PVSUFF_SUBJ:3FP+hu/PVSUFF_DO:3MS</pos>\n' +
'hmA	~ahumA	PVSuff-~nh	they <verb> (both of) them                      <pos>+na/PVSUFF_SUBJ:3FP+humA/PVSUFF_DO:3D</pos>\n' +
'hm	~ahum	PVSuff-~nh	they <verb> them                                <pos>+na/PVSUFF_SUBJ:3FP+hum/PVSUFF_DO:3MP</pos>\n' +
'hA	~ahA	PVSuff-~nh	they <verb> it/them/her                         <pos>+na/PVSUFF_SUBJ:3FP+hA/PVSUFF_DO:3FS</pos>\n' +
'hn	~ahun~a	PVSuff-~nh	they <verb> them                                <pos>+na/PVSUFF_SUBJ:3FP+hun~a/PVSUFF_DO:3FP</pos>\n' +
'k	~aka	PVSuff-~nh	they <verb> you                                 <pos>+na/PVSUFF_SUBJ:3FP+ka/PVSUFF_DO:2MS</pos>\n' +
'k	~aki	PVSuff-~nh	they <verb> you                                 <pos>+na/PVSUFF_SUBJ:3FP+ki/PVSUFF_DO:2FS</pos>\n' +
'kmA	~akumA	PVSuff-~nh	they <verb> you                                 <pos>+na/PVSUFF_SUBJ:3FP+kumA/PVSUFF_DO:2D</pos>\n' +
'km	~akum	PVSuff-~nh	they <verb> you                                 <pos>+na/PVSUFF_SUBJ:3FP+kum/PVSUFF_DO:2MP</pos>\n' +
'kn	~akun~a	PVSuff-~nh	they <verb> you                                 <pos>+na/PVSUFF_SUBJ:3FP+kun~a/PVSUFF_DO:2FP</pos>\n' +
'ny	~aniy	PVSuff-~nh	they <verb> me                                  <pos>+na/PVSUFF_SUBJ:3FP+niy/PVSUFF_DO:1S</pos>\n' +
'nA	~anA	PVSuff-~nh	they <verb> us                                  <pos>+na/PVSUFF_SUBJ:3FP+nA/PVSUFF_DO:1P</pos>\n' +
';===========\n' +
'nAh	onAhu	PVSuff-nh	we <verb> it/him                                <pos>+nA/PVSUFF_SUBJ:1P+hu/PVSUFF_DO:3MS</pos>\n' +
'nAhmA	onAhumA	PVSuff-nh	we <verb> (both of) them                        <pos>+nA/PVSUFF_SUBJ:1P+humA/PVSUFF_DO:3D</pos>\n' +
'nAhm	onAhum	PVSuff-nh	we <verb> them                                  <pos>+nA/PVSUFF_SUBJ:1P+hum/PVSUFF_DO:3MP</pos>\n' +
'nAhA	onAhA	PVSuff-nh	we <verb> it/them/her                           <pos>+nA/PVSUFF_SUBJ:1P+hA/PVSUFF_DO:3FS</pos>\n' +
'nAhn	onAhun~a	PVSuff-nh	we <verb> them                                  <pos>+nA/PVSUFF_SUBJ:1P+hun~a/PVSUFF_DO:3FP</pos>\n' +
'nAk	onAka	PVSuff-nh	we <verb> you                                   <pos>+nA/PVSUFF_SUBJ:1P+ka/PVSUFF_DO:2MS</pos>\n' +
'nAk	onAki	PVSuff-nh	we <verb> you                                   <pos>+nA/PVSUFF_SUBJ:1P+ki/PVSUFF_DO:2FS</pos>\n' +
'nAkmA	onAkumA	PVSuff-nh	we <verb> you                                   <pos>+nA/PVSUFF_SUBJ:1P+kumA/PVSUFF_DO:2D</pos>\n' +
'nAkm	onAkum	PVSuff-nh	we <verb> you                                   <pos>+nA/PVSUFF_SUBJ:1P+kum/PVSUFF_DO:2MP</pos>\n' +
'nAkn	onAkun~a	PVSuff-nh	we <verb> you                                   <pos>+nA/PVSUFF_SUBJ:1P+kun~a/PVSUFF_DO:2FP</pos>\n' +
';----------------------------------------------------------------------------------------------------------------------------\n' +
'Ah	~Ahu	PVSuff-~nh	we <verb> it/him                                <pos>+nA/PVSUFF_SUBJ:1P+hu/PVSUFF_DO:3MS</pos>\n' +
'AhmA	~AhumA	PVSuff-~nh	we <verb> (both of) them                        <pos>+nA/PVSUFF_SUBJ:1P+humA/PVSUFF_DO:3D</pos>\n' +
'Ahm	~Ahum	PVSuff-~nh	we <verb> them                                  <pos>+nA/PVSUFF_SUBJ:1P+hum/PVSUFF_DO:3MP</pos>\n' +
'AhA	~AhA	PVSuff-~nh	we <verb> it/them/her                           <pos>+nA/PVSUFF_SUBJ:1P+hA/PVSUFF_DO:3FS</pos>\n' +
'Ahn	~Ahun~a	PVSuff-~nh	we <verb> them                                  <pos>+nA/PVSUFF_SUBJ:1P+hun~a/PVSUFF_DO:3FP</pos>\n' +
'Ak	~Aka	PVSuff-~nh	we <verb> you                                   <pos>+nA/PVSUFF_SUBJ:1P+ka/PVSUFF_DO:2MS</pos>\n' +
'Ak	~Aki	PVSuff-~nh	we <verb> you                                   <pos>+nA/PVSUFF_SUBJ:1P+ki/PVSUFF_DO:2FS</pos>\n' +
'AkmA	~AkumA	PVSuff-~nh	we <verb> you                                   <pos>+nA/PVSUFF_SUBJ:1P+kumA/PVSUFF_DO:2D</pos>\n' +
'Akm	~Akum	PVSuff-~nh	we <verb> you                                   <pos>+nA/PVSUFF_SUBJ:1P+kum/PVSUFF_DO:2MP</pos>\n' +
'Akn	~Akun~a	PVSuff-~nh	we <verb> you                                   <pos>+nA/PVSUFF_SUBJ:1P+kun~a/PVSUFF_DO:2FP</pos>\n' +
';\n' +
'; ==========\n' +
'; perfect verb suffixes that begin with the consonant "t", which elides with verb stems ending in "t" (e.g. >avobat+tu).\n' +
'; Also, as a consonant, it attaches only to short-stem form of hollow verbs:\n' +
';  e.g. qul+tu, qul+ta, qul+ti, qul+tumA, qul+tun~a, qul+tum\n' +
't	otu	PVSuff-t	I <verb>                            <pos>+tu/PVSUFF_SUBJ:1S</pos>\n' +
't	ota	PVSuff-t	you [masc.sg.] <verb>               <pos>+ta/PVSUFF_SUBJ:2MS</pos>\n' +
't	oti	PVSuff-t	you [fem.sg.] <verb>                <pos>+ti/PVSUFF_SUBJ:2FS</pos>\n' +
'tmA	otumA	PVSuff-t	you [du.] <verb>                    <pos>+tumA/PVSUFF_SUBJ:2D</pos>\n' +
'tm	otum	PVSuff-t	you [masc.pl.] <verb>               <pos>+tum/PVSUFF_SUBJ:2MP</pos>\n' +
'tn	otun~a	PVSuff-t	you [fem.pl.] <verb>                <pos>+tun~a/PVSUFF_SUBJ:2FP</pos>\n' +
';----------------------------------------------------------------------------------------------------------------------------\n' +
'~u	PVSuff-~t	I <verb>                            <pos>+tu/PVSUFF_SUBJ:1S</pos>\n' +
'~a	PVSuff-~t	you [masc.sg.] <verb>               <pos>+ta/PVSUFF_SUBJ:2MS</pos>\n' +
'~i	PVSuff-~t	you [fem.sg.] <verb>                <pos>+ti/PVSUFF_SUBJ:2FS</pos>\n' +
'mA	~umA	PVSuff-~t	you [du.] <verb>                    <pos>+tumA/PVSUFF_SUBJ:2D</pos>\n' +
'm	~um	PVSuff-~t	you [masc.pl.] <verb>               <pos>+tum/PVSUFF_SUBJ:2MP</pos>\n' +
'n	~un~a	PVSuff-~t	you [fem.pl.] <verb>                <pos>+tun~a/PVSUFF_SUBJ:2FP</pos>\n' +
';\n' +
'; ==========\n' +
'; perfect verb suffixes that begin with consonant "t" + DO\n' +
'th	otuhu	PVSuff-th	I <verb> it/him                     <pos>+tu/PVSUFF_SUBJ:1S+hu/PVSUFF_DO:3MS</pos>\n' +
'thmA	otuhumA	PVSuff-th	I <verb> them (both)                <pos>+tu/PVSUFF_SUBJ:1S+humA/PVSUFF_DO:3D</pos>\n' +
'thm	otuhum	PVSuff-th	I <verb> them                       <pos>+tu/PVSUFF_SUBJ:1S+hum/PVSUFF_DO:3MP</pos>\n' +
'thA	otuhA	PVSuff-th	I <verb> it/them/her                <pos>+tu/PVSUFF_SUBJ:1S+hA/PVSUFF_DO:3FS</pos>\n' +
'thn	otuhun~a	PVSuff-th	I <verb> them                       <pos>+tu/PVSUFF_SUBJ:1S+hun~a/PVSUFF_DO:3FP</pos>\n' +
';----------------------------------------------------------------------------------------------------------------------------\n' +
'h	~uhu	PVSuff-~th	I <verb> it/him                     <pos>+tu/PVSUFF_SUBJ:1S+hu/PVSUFF_DO:3MS</pos>\n' +
'hmA	~uhumA	PVSuff-~th	I <verb> them (both)                <pos>+tu/PVSUFF_SUBJ:1S+humA/PVSUFF_DO:3D</pos>\n' +
'hm	~uhum	PVSuff-~th	I <verb> them                       <pos>+tu/PVSUFF_SUBJ:1S+hum/PVSUFF_DO:3MP</pos>\n' +
'hA	~uhA	PVSuff-~th	I <verb> it/them/her                <pos>+tu/PVSUFF_SUBJ:1S+hA/PVSUFF_DO:3FS</pos>\n' +
'hn	~uhun~a	PVSuff-~th	I <verb> them                       <pos>+tu/PVSUFF_SUBJ:1S+hun~a/PVSUFF_DO:3FP</pos>\n' +
'; ==========\n' +
'th	otahu	PVSuff-th	you [masc.sg.] <verb> it/him                               <pos>+ta/PVSUFF_SUBJ:2MS+hu/PVSUFF_DO:3MS</pos>\n' +
'thmA	otahumA	PVSuff-th	you [masc.sg.] <verb> them (both)                          <pos>+ta/PVSUFF_SUBJ:2MS+humA/PVSUFF_DO:3D</pos>\n' +
'thm	otahum	PVSuff-th	you [masc.sg.] <verb> them                                 <pos>+ta/PVSUFF_SUBJ:2MS+hum/PVSUFF_DO:3MP</pos>\n' +
'thA	otahA	PVSuff-th	you [masc.sg.] <verb> it/them/her                          <pos>+ta/PVSUFF_SUBJ:2MS+hA/PVSUFF_DO:3FS</pos>\n' +
'thn	otahun~a	PVSuff-th	you [masc.sg.] <verb> them                                 <pos>+ta/PVSUFF_SUBJ:2MS+hun~a/PVSUFF_DO:3FP</pos>\n' +
';----------------------------------------------------------------------------------------------------------------------------\n' +
'h	~ahu	PVSuff-~th	you [masc.sg.] <verb> it/him                               <pos>+ta/PVSUFF_SUBJ:2MS+hu/PVSUFF_DO:3MS</pos>\n' +
'hmA	~ahumA	PVSuff-~th	you [masc.sg.] <verb> them (both)                          <pos>+ta/PVSUFF_SUBJ:2MS+humA/PVSUFF_DO:3D</pos>\n' +
'hm	~ahum	PVSuff-~th	you [masc.sg.] <verb> them                                 <pos>+ta/PVSUFF_SUBJ:2MS+hum/PVSUFF_DO:3MP</pos>\n' +
'hA	~ahA	PVSuff-~th	you [masc.sg.] <verb> it/them/her                          <pos>+ta/PVSUFF_SUBJ:2MS+hA/PVSUFF_DO:3FS</pos>\n' +
'hn	~ahun~a	PVSuff-~th	you [masc.sg.] <verb> them                                 <pos>+ta/PVSUFF_SUBJ:2MS+hun~a/PVSUFF_DO:3FP</pos>\n' +
'; ==========\n' +
'th	otihi	PVSuff-th	you [fem.sg.] <verb> it/him                               <pos>+ti/PVSUFF_SUBJ:2FS+hu/PVSUFF_DO:3MS</pos>\n' +
'thmA	otihimA	PVSuff-th	you [fem.sg.] <verb> them (both)                          <pos>+ti/PVSUFF_SUBJ:2FS+humA/PVSUFF_DO:3D</pos>\n' +
'thm	otihim	PVSuff-th	you [fem.sg.] <verb> them                                 <pos>+ti/PVSUFF_SUBJ:2FS+hum/PVSUFF_DO:3MP</pos>\n' +
'thA	otihA	PVSuff-th	you [fem.sg.] <verb> it/them/her                          <pos>+ti/PVSUFF_SUBJ:2FS+hA/PVSUFF_DO:3FS</pos>\n' +
'thn	otihin~a	PVSuff-th	you [fem.sg.] <verb> them                                 <pos>+ti/PVSUFF_SUBJ:2FS+hun~a/PVSUFF_DO:3FP</pos>\n' +
';----------------------------------------------------------------------------------------------------------------------------\n' +
'h	~ihi	PVSuff-~th	you [fem.sg.] <verb> it/him                               <pos>+ti/PVSUFF_SUBJ:2FS+hu/PVSUFF_DO:3MS</pos>\n' +
'hmA	~ihimA	PVSuff-~th	you [fem.sg.] <verb> them (both)                          <pos>+ti/PVSUFF_SUBJ:2FS+humA/PVSUFF_DO:3D</pos>\n' +
'hm	~ihim	PVSuff-~th	you [fem.sg.] <verb> them                                 <pos>+ti/PVSUFF_SUBJ:2FS+hum/PVSUFF_DO:3MP</pos>\n' +
'hA	~ihA	PVSuff-~th	you [fem.sg.] <verb> it/them/her                          <pos>+ti/PVSUFF_SUBJ:2FS+hA/PVSUFF_DO:3FS</pos>\n' +
'hn	~ihin~a	PVSuff-~th	you [fem.sg.] <verb> them                                 <pos>+ti/PVSUFF_SUBJ:2FS+hun~a/PVSUFF_DO:3FP</pos>\n' +
'; ==========\n' +
'tk	otuka	PVSuff-th	I <verb> you                                    <pos>+tu/PVSUFF_SUBJ:1S+ka/PVSUFF_DO:2MS</pos>\n' +
'tk	otuki	PVSuff-th	I <verb> you                                    <pos>+tu/PVSUFF_SUBJ:1S+ki/PVSUFF_DO:2FS</pos>\n' +
'tkmA	otukumA	PVSuff-th	I <verb> you (both)                             <pos>+tu/PVSUFF_SUBJ:1S+kumA/PVSUFF_DO:2D</pos>\n' +
'tkm	otukum	PVSuff-th	I <verb> you (pl.)                              <pos>+tu/PVSUFF_SUBJ:1S+kum/PVSUFF_DO:2MP</pos>\n' +
'tkn	otukun~a	PVSuff-th	I <verb> you (women)                            <pos>+tu/PVSUFF_SUBJ:1S+kun~a/PVSUFF_DO:2FP</pos>\n' +
';----------------------------------------------------------------------------------------------------------------------------\n' +
'k	~uka	PVSuff-~th	I <verb> you                                    <pos>+tu/PVSUFF_SUBJ:1S+ka/PVSUFF_DO:2MS</pos>\n' +
'k	~uki	PVSuff-~th	I <verb> you                                    <pos>+tu/PVSUFF_SUBJ:1S+ki/PVSUFF_DO:2FS</pos>\n' +
'kmA	~ukumA	PVSuff-~th	I <verb> you (both)                             <pos>+tu/PVSUFF_SUBJ:1S+kumA/PVSUFF_DO:2D</pos>\n' +
'km	~ukum	PVSuff-~th	I <verb> you (pl.)                              <pos>+tu/PVSUFF_SUBJ:1S+kum/PVSUFF_DO:2MP</pos>\n' +
'kn	~ukun~a	PVSuff-~th	I <verb> you (women)                            <pos>+tu/PVSUFF_SUBJ:1S+kun~a/PVSUFF_DO:2FP</pos>\n' +
'; ==========\n' +
'tny	otaniy	PVSuff-th	you [masc.sg.] <verb> me                                   <pos>+ta/PVSUFF_SUBJ:2MS+niy/PVSUFF_DO:1S</pos>\n' +
'tnA	otanA	PVSuff-th	you [masc.sg.] <verb> us                                   <pos>+ta/PVSUFF_SUBJ:2MS+nA/PVSUFF_DO:1P</pos>\n' +
';----------------------------------------------------------------------------------------------------------------------------\n' +
'ny	~aniy	PVSuff-~th	you [masc.sg.] <verb> me                                   <pos>+ta/PVSUFF_SUBJ:2MS+niy/PVSUFF_DO:1S</pos>\n' +
'nA	~anA	PVSuff-~th	you [masc.sg.] <verb> us                                   <pos>+ta/PVSUFF_SUBJ:2MS+nA/PVSUFF_DO:1P</pos>\n' +
'; ==========\n' +
'tny	otiniy	PVSuff-th	you [fem.sg.] <verb> me                                   <pos>+ti/PVSUFF_SUBJ:2FS+niy/PVSUFF_DO:1S</pos>\n' +
'tnA	otinA	PVSuff-th	you [fem.sg.] <verb> us                                   <pos>+ti/PVSUFF_SUBJ:2FS+nA/PVSUFF_DO:1P</pos>\n' +
';----------------------------------------------------------------------------------------------------------------------------\n' +
'ny	~iniy	PVSuff-~th	you [fem.sg.] <verb> me                                   <pos>+ti/PVSUFF_SUBJ:2FS+niy/PVSUFF_DO:1S</pos>\n' +
'nA	~inA	PVSuff-~th	you [fem.sg.] <verb> us                                   <pos>+ti/PVSUFF_SUBJ:2FS+nA/PVSUFF_DO:1P</pos>\n' +
'; ==========\n' +
'tmAh	otumAhu	PVSuff-th	you [du.] <verb> it/him                               <pos>+tumA/PVSUFF_SUBJ:2D+hu/PVSUFF_DO:3MS</pos>\n' +
'tmAhmA	otumAhumA	PVSuff-th	you [du.] <verb> them (both)                          <pos>+tumA/PVSUFF_SUBJ:2D+humA/PVSUFF_DO:3D</pos>\n' +
'tmAhm	otumAhum	PVSuff-th	you [du.] <verb> them                                 <pos>+tumA/PVSUFF_SUBJ:2D+hum/PVSUFF_DO:3MP</pos>\n' +
'tmAhA	otumAhA	PVSuff-th	you [du.] <verb> it/them/her                          <pos>+tumA/PVSUFF_SUBJ:2D+hA/PVSUFF_DO:3FS</pos>\n' +
'tmAhn	otumAhun~a	PVSuff-th	you [du.] <verb> them                                 <pos>+tumA/PVSUFF_SUBJ:2D+hun~a/PVSUFF_DO:3FP</pos>\n' +
'tmAny	otumAniy	PVSuff-th	you [du.] <verb> me                                   <pos>+tumA/PVSUFF_SUBJ:2D+niy/PVSUFF_DO:1S</pos>\n' +
'tmAnA	otumAnA	PVSuff-th	you [du.] <verb> us                                   <pos>+tumA/PVSUFF_SUBJ:2D+nA/PVSUFF_DO:1P</pos>\n' +
';----------------------------------------------------------------------------------------------------------------------------\n' +
'mAh	~umAhu	PVSuff-~th	you [du.] <verb> it/him                               <pos>+tumA/PVSUFF_SUBJ:2D+hu/PVSUFF_DO:3MS</pos>\n' +
'mAhmA	~umAhumA	PVSuff-~th	you [du.] <verb> them (both)                          <pos>+tumA/PVSUFF_SUBJ:2D+humA/PVSUFF_DO:3D</pos>\n' +
'mAhm	~umAhum	PVSuff-~th	you [du.] <verb> them                                 <pos>+tumA/PVSUFF_SUBJ:2D+hum/PVSUFF_DO:3MP</pos>\n' +
'mAhA	~umAhA	PVSuff-~th	you [du.] <verb> it/them/her                          <pos>+tumA/PVSUFF_SUBJ:2D+hA/PVSUFF_DO:3FS</pos>\n' +
'mAhn	~umAhun~a	PVSuff-~th	you [du.] <verb> them                                 <pos>+tumA/PVSUFF_SUBJ:2D+hun~a/PVSUFF_DO:3FP</pos>\n' +
'mAny	~umAniy	PVSuff-~th	you [du.] <verb> me                                   <pos>+tumA/PVSUFF_SUBJ:2D+niy/PVSUFF_DO:1S</pos>\n' +
'mAnA	~umAnA	PVSuff-~th	you [du.] <verb> us                                   <pos>+tumA/PVSUFF_SUBJ:2D+nA/PVSUFF_DO:1P</pos>\n' +
'; ==========\n' +
'tmwh	otumuwhu	PVSuff-th	you [masc.pl.] <verb> it/him                               <pos>+tum/PVSUFF_SUBJ:2MP+hu/PVSUFF_DO:3MS</pos>\n' +
'tmwhmA	otumuwhumA	PVSuff-th	you [masc.pl.] <verb> them (both)                          <pos>+tum/PVSUFF_SUBJ:2MP+humA/PVSUFF_DO:3D</pos>\n' +
'tmwhm	otumuwhum	PVSuff-th	you [masc.pl.] <verb> them                                 <pos>+tum/PVSUFF_SUBJ:2MP+hum/PVSUFF_DO:3MP</pos>\n' +
'tmwhA	otumuwhA	PVSuff-th	you [masc.pl.] <verb> it/them/her                          <pos>+tum/PVSUFF_SUBJ:2MP+hA/PVSUFF_DO:3FS</pos>\n' +
'tmwhn	otumuwhun~a	PVSuff-th	you [masc.pl.] <verb> them                                 <pos>+tum/PVSUFF_SUBJ:2MP+hun~a/PVSUFF_DO:3FP</pos>\n' +
'tmwny	otumuwniy	PVSuff-th	you [masc.pl.] <verb> me                                   <pos>+tum/PVSUFF_SUBJ:2MP+niy/PVSUFF_DO:1S</pos>\n' +
'tmwnA	otumuwnA	PVSuff-th	you [masc.pl.] <verb> us                                   <pos>+tum/PVSUFF_SUBJ:2MP+nA/PVSUFF_DO:1P</pos>\n' +
';----------------------------------------------------------------------------------------------------------------------------\n' +
'mwh	~umuwhu	PVSuff-~th	you [masc.pl.] <verb> it/him                               <pos>+tum/PVSUFF_SUBJ:2MP+hu/PVSUFF_DO:3MS</pos>\n' +
'mwhmA	~umuwhumA	PVSuff-~th	you [masc.pl.] <verb> them (both)                          <pos>+tum/PVSUFF_SUBJ:2MP+humA/PVSUFF_DO:3D</pos>\n' +
'mwhm	~umuwhum	PVSuff-~th	you [masc.pl.] <verb> them                                 <pos>+tum/PVSUFF_SUBJ:2MP+hum/PVSUFF_DO:3MP</pos>\n' +
'mwhA	~umuwhA	PVSuff-~th	you [masc.pl.] <verb> it/them/her                          <pos>+tum/PVSUFF_SUBJ:2MP+hA/PVSUFF_DO:3FS</pos>\n' +
'mwhn	~umuwhun~a	PVSuff-~th	you [masc.pl.] <verb> them                                 <pos>+tum/PVSUFF_SUBJ:2MP+hun~a/PVSUFF_DO:3FP</pos>\n' +
'mwny	~umuwniy	PVSuff-~th	you [masc.pl.] <verb> me                                   <pos>+tum/PVSUFF_SUBJ:2MP+niy/PVSUFF_DO:1S</pos>\n' +
'mwnA	~umuwnA	PVSuff-~th	you [masc.pl.] <verb> us                                   <pos>+tum/PVSUFF_SUBJ:2MP+nA/PVSUFF_DO:1P</pos>\n' +
'; ==========\n' +
'tnh	otun~ahu	PVSuff-th	you [fem.pl.] <verb> it/him                               <pos>+tun~a/PVSUFF_SUBJ:2FP+hu/PVSUFF_DO:3MS</pos>\n' +
'tnhmA	otun~ahumA	PVSuff-th	you [fem.pl.] <verb> them (both)                          <pos>+tun~a/PVSUFF_SUBJ:2FP+humA/PVSUFF_DO:3D</pos>\n' +
'tnhm	otun~ahum	PVSuff-th	you [fem.pl.] <verb> them                                 <pos>+tun~a/PVSUFF_SUBJ:2FP+hum/PVSUFF_DO:3MP</pos>\n' +
'tnhA	otun~ahA	PVSuff-th	you [fem.pl.] <verb> it/them/her                          <pos>+tun~a/PVSUFF_SUBJ:2FP+hA/PVSUFF_DO:3FS</pos>\n' +
'tnhn	otun~ahun~a	PVSuff-th	you [fem.pl.] <verb> them                                 <pos>+tun~a/PVSUFF_SUBJ:2FP+hun~a/PVSUFF_DO:3FP</pos>\n' +
'tnny	otun~aniy	PVSuff-th	you [fem.pl.] <verb> me                                   <pos>+tun~a/PVSUFF_SUBJ:2FP+niy/PVSUFF_DO:1S</pos>\n' +
'tnnA	otun~anA	PVSuff-th	you [fem.pl.] <verb> us                                   <pos>+tun~a/PVSUFF_SUBJ:2FP+nA/PVSUFF_DO:1P</pos>\n' +
';----------------------------------------------------------------------------------------------------------------------------\n' +
'nh	~un~ahu	PVSuff-~th	you [fem.pl.] <verb> it/him                               <pos>+tun~a/PVSUFF_SUBJ:2FP+hu/PVSUFF_DO:3MS</pos>\n' +
'nhmA	~un~ahumA	PVSuff-~th	you [fem.pl.] <verb> them (both)                          <pos>+tun~a/PVSUFF_SUBJ:2FP+humA/PVSUFF_DO:3D</pos>\n' +
'nhm	~un~ahum	PVSuff-~th	you [fem.pl.] <verb> them                                 <pos>+tun~a/PVSUFF_SUBJ:2FP+hum/PVSUFF_DO:3MP</pos>\n' +
'nhA	~un~ahA	PVSuff-~th	you [fem.pl.] <verb> it/them/her                          <pos>+tun~a/PVSUFF_SUBJ:2FP+hA/PVSUFF_DO:3FS</pos>\n' +
'nhn	~un~ahun~a	PVSuff-~th	you [fem.pl.] <verb> them                                 <pos>+tun~a/PVSUFF_SUBJ:2FP+hun~a/PVSUFF_DO:3FP</pos>\n' +
'nny	~un~aniy	PVSuff-~th	you [fem.pl.] <verb> me                                   <pos>+tun~a/PVSUFF_SUBJ:2FP+niy/PVSUFF_DO:1S</pos>\n' +
'nnA	~un~anA	PVSuff-~th	you [fem.pl.] <verb> us                                   <pos>+tun~a/PVSUFF_SUBJ:2FP+nA/PVSUFF_DO:1P</pos>\n' +
';\n' +
'; ==========\n' +
'; perfect verb suffixes that begin with vowel ("-at" "-atA")\n' +
't	at	PVSuff-at	it/they/she <verb>                              <pos>+at/PVSUFF_SUBJ:3FS</pos>\n' +
'tA	atA	PVSuff-at	they (both) <verb>                              <pos>+atA/PVSUFF_SUBJ:3FD</pos>\n' +
';\n' +
'; ==========\n' +
'; perfect verb suffixes that begin with vowel + DO\n' +
'th	atohu	PVSuff-ath	it/they/she <verb> it/him                       <pos>+at/PVSUFF_SUBJ:3FS+hu/PVSUFF_DO:3MS</pos>\n' +
'thmA	atohumA	PVSuff-ath	it/they/she <verb> them (both)                  <pos>+at/PVSUFF_SUBJ:3FS+humA/PVSUFF_DO:3D</pos>\n' +
'thm	atohum	PVSuff-ath	it/they/she <verb> them                         <pos>+at/PVSUFF_SUBJ:3FS+hum/PVSUFF_DO:3MP</pos>\n' +
'thA	atohA	PVSuff-ath	it/they/she <verb> it/them/her                  <pos>+at/PVSUFF_SUBJ:3FS+hA/PVSUFF_DO:3FS</pos>\n' +
'thn	atohun~a	PVSuff-ath	it/they/she <verb> them                         <pos>+at/PVSUFF_SUBJ:3FS+hun~a/PVSUFF_DO:3FP</pos>\n' +
'tk	atoka	PVSuff-ath	it/they/she <verb> you                          <pos>+at/PVSUFF_SUBJ:3FS+ka/PVSUFF_DO:2MS</pos>\n' +
'tk	atoki	PVSuff-ath	it/they/she <verb> you                          <pos>+at/PVSUFF_SUBJ:3FS+ki/PVSUFF_DO:2FS</pos>\n' +
'tkmA	atokumA	PVSuff-ath	it/they/she <verb> you (both)                   <pos>+at/PVSUFF_SUBJ:3FS+kumA/PVSUFF_DO:2D</pos>\n' +
'tkm	atokum	PVSuff-ath	it/they/she <verb> you                          <pos>+at/PVSUFF_SUBJ:3FS+kum/PVSUFF_DO:2MP</pos>\n' +
'tkn	atokun~a	PVSuff-ath	it/they/she <verb> you                          <pos>+at/PVSUFF_SUBJ:3FS+kun~a/PVSUFF_DO:2FP</pos>\n' +
'tny	atoniy	PVSuff-ath	it/they/she <verb> me                           <pos>+at/PVSUFF_SUBJ:3FS+niy/PVSUFF_DO:1S</pos>\n' +
'tnA	atonA	PVSuff-ath	it/they/she <verb> us                           <pos>+at/PVSUFF_SUBJ:3FS+nA/PVSUFF_DO:1P</pos>\n' +
';\n' +
'tAh	atAhu	PVSuff-ath	they (both) <verb> it/him                       <pos>+atA/PVSUFF_SUBJ:3FD+hu/PVSUFF_DO:3MS</pos>\n' +
'tAhmA	atAhumA	PVSuff-ath	they (both) <verb> them (both)                  <pos>+atA/PVSUFF_SUBJ:3FD+humA/PVSUFF_DO:3D</pos>\n' +
'tAhm	atAhum	PVSuff-ath	they (both) <verb> them                         <pos>+atA/PVSUFF_SUBJ:3FD+hum/PVSUFF_DO:3MP</pos>\n' +
'tAhA	atAhA	PVSuff-ath	they (both) <verb> it/them/her                  <pos>+atA/PVSUFF_SUBJ:3FD+hA/PVSUFF_DO:3FS</pos>\n' +
'tAhn	atAhun~a	PVSuff-ath	they (both) <verb> them                         <pos>+atA/PVSUFF_SUBJ:3FD+hun~a/PVSUFF_DO:3FP</pos>\n' +
'tAk	atAka	PVSuff-ath	they (both) <verb> you                          <pos>+atA/PVSUFF_SUBJ:3FD+ka/PVSUFF_DO:2MS</pos>\n' +
'tAk	atAki	PVSuff-ath	they (both) <verb> you                          <pos>+atA/PVSUFF_SUBJ:3FD+ki/PVSUFF_DO:2FS</pos>\n' +
'tAkmA	atAkumA	PVSuff-ath	they (both) <verb> you (both)                   <pos>+atA/PVSUFF_SUBJ:3FD+kumA/PVSUFF_DO:2D</pos>\n' +
'tAkm	atAkum	PVSuff-ath	they (both) <verb> you                          <pos>+atA/PVSUFF_SUBJ:3FD+kum/PVSUFF_DO:2MP</pos>\n' +
'tAkn	atAkun~a	PVSuff-ath	they (both) <verb> you                          <pos>+atA/PVSUFF_SUBJ:3FD+kun~a/PVSUFF_DO:2FP</pos>\n' +
'tAny	atAniy	PVSuff-ath	they (both) <verb> me                           <pos>+atA/PVSUFF_SUBJ:3FD+niy/PVSUFF_DO:1S</pos>\n' +
'tAnA	atAnA	PVSuff-ath	they (both) <verb> us                           <pos>+atA/PVSUFF_SUBJ:3FD+nA/PVSUFF_DO:1P</pos>\n' +
';\n' +
'; ==========\n' +
'; perfect verb suffixes that begin with long vowel "-A" (i.e. masc.du.)\n' +
'A	A	PVSuff-A	they (both) <verb>                       <pos>+A/PVSUFF_SUBJ:3MD</pos>\n' +
'; null  bada>-A = bada|\n' +
'PVSuff-|	they (both) <verb>                       <pos>+A/PVSUFF_SUBJ:3MD</pos>\n' +
';\n' +
'; ==========\n' +
'; perfect verb suffixes that begin with long vowel "-A"  + DO\n' +
'Ah	Ahu	PVSuff-Ah	they (both) <verb> it/him                <pos>+A/PVSUFF_SUBJ:3MD+hu/PVSUFF_DO:3MS</pos>\n' +
'AhmA	AhumA	PVSuff-Ah	they (both) <verb> them (both)           <pos>+A/PVSUFF_SUBJ:3MD+humA/PVSUFF_DO:3D</pos>\n' +
'Ahm	Ahum	PVSuff-Ah	they (both) <verb> them                  <pos>+A/PVSUFF_SUBJ:3MD+hum/PVSUFF_DO:3MP</pos>\n' +
'AhA	AhA	PVSuff-Ah	they (both) <verb> it/them/her           <pos>+A/PVSUFF_SUBJ:3MD+hA/PVSUFF_DO:3FS</pos>\n' +
'Ahn	Ahun~a	PVSuff-Ah	they (both) <verb> them                  <pos>+A/PVSUFF_SUBJ:3MD+hun~a/PVSUFF_DO:3FP</pos>\n' +
'Ak	Aka	PVSuff-Ah	they (both) <verb> you                   <pos>+A/PVSUFF_SUBJ:3MD+ka/PVSUFF_DO:2MS</pos>\n' +
'Ak	Aki	PVSuff-Ah	they (both) <verb> you                   <pos>+A/PVSUFF_SUBJ:3MD+ki/PVSUFF_DO:2FS</pos>\n' +
'AkmA	AkumA	PVSuff-Ah	they (both) <verb> you (both)            <pos>+A/PVSUFF_SUBJ:3MD+kumA/PVSUFF_DO:2D</pos>\n' +
'Akm	Akum	PVSuff-Ah	they (both) <verb> you                   <pos>+A/PVSUFF_SUBJ:3MD+kum/PVSUFF_DO:2MP</pos>\n' +
'Akn	Akun~a	PVSuff-Ah	they (both) <verb> you                   <pos>+A/PVSUFF_SUBJ:3MD+kun~a/PVSUFF_DO:2FP</pos>\n' +
'Any	Aniy	PVSuff-Ah	they (both) <verb> me                    <pos>+A/PVSUFF_SUBJ:3MD+niy/PVSUFF_DO:1S</pos>\n' +
'AnA	AnA	PVSuff-Ah	they (both) <verb> us                    <pos>+A/PVSUFF_SUBJ:3MD+nA/PVSUFF_DO:1P</pos>\n' +
';---------------------------------------------------------------------------------------------------------------------------\n' +
'; null  bada>-Ahu = bada|-hu\n' +
'h	hu	PVSuff-|h	they (both) <verb> it/him                <pos>+A/PVSUFF_SUBJ:3MD+hu/PVSUFF_DO:3MS</pos>\n' +
'hmA	humA	PVSuff-|h	they (both) <verb> them (both)           <pos>+A/PVSUFF_SUBJ:3MD+humA/PVSUFF_DO:3D</pos>\n' +
'hm	hum	PVSuff-|h	they (both) <verb> them                  <pos>+A/PVSUFF_SUBJ:3MD+hum/PVSUFF_DO:3MP</pos>\n' +
'hA	hA	PVSuff-|h	they (both) <verb> it/them/her           <pos>+A/PVSUFF_SUBJ:3MD+hA/PVSUFF_DO:3FS</pos>\n' +
'hn	hun~a	PVSuff-|h	they (both) <verb> them                  <pos>+A/PVSUFF_SUBJ:3MD+hun~a/PVSUFF_DO:3FP</pos>\n' +
'k	ka	PVSuff-|h	they (both) <verb> you                   <pos>+A/PVSUFF_SUBJ:3MD+ka/PVSUFF_DO:2MS</pos>\n' +
'k	ki	PVSuff-|h	they (both) <verb> you                   <pos>+A/PVSUFF_SUBJ:3MD+ki/PVSUFF_DO:2FS</pos>\n' +
'kmA	kumA	PVSuff-|h	they (both) <verb> you (both)            <pos>+A/PVSUFF_SUBJ:3MD+kumA/PVSUFF_DO:2D</pos>\n' +
'km	kum	PVSuff-|h	they (both) <verb> you                   <pos>+A/PVSUFF_SUBJ:3MD+kum/PVSUFF_DO:2MP</pos>\n' +
'kn	kun~a	PVSuff-|h	they (both) <verb> you                   <pos>+A/PVSUFF_SUBJ:3MD+kun~a/PVSUFF_DO:2FP</pos>\n' +
'ny	niy	PVSuff-|h	they (both) <verb> me                    <pos>+A/PVSUFF_SUBJ:3MD+niy/PVSUFF_DO:1S</pos>\n' +
'nA	nA	PVSuff-|h	they (both) <verb> us                    <pos>+A/PVSUFF_SUBJ:3MD+nA/PVSUFF_DO:1P</pos>\n' +
';\n' +
'; ==========\n' +
'; perfect verb suffixes that begin with long vowel "-w" (i.e. masc.pl.)\n' +
'wA	uwA	PVSuff-uwA	they <verb>                                    <pos>+uwA/PVSUFF_SUBJ:3MP</pos>\n' +
'wA	awoA	PVSuff-awA	they <verb>                                    <pos>+awoA/PVSUFF_SUBJ:3MP</pos>\n' +
';\n' +
';-----------\n' +
'; Imperative verb suffixes that begin with long vowel "-uw" (Antum)\n' +
'wA	uwA	CVSuff-wA	you [masc.pl] <verb>                                     <pos>+uwA/CVSUFF_SUBJ:2MP</pos>\n' +
'; with direct object\n' +
'wh	uwhu	CVSuff-wh	you [masc.pl] <verb> it/him                              <pos>+uw/CVSUFF_SUBJ:2MP+hu/CVSUFF_DO:3MS</pos>\n' +
'whmA	uwhumA	CVSuff-wh	you [masc.pl] <verb> them (both)                         <pos>+uw/CVSUFF_SUBJ:2MP+humA/CVSUFF_DO:3D</pos>\n' +
'whm	uwhum	CVSuff-wh	you [masc.pl] <verb> them                                <pos>+uw/CVSUFF_SUBJ:2MP+hum/CVSUFF_DO:3MP</pos>\n' +
'whA	uwhA	CVSuff-wh	you [masc.pl] <verb> it/them/her                         <pos>+uw/CVSUFF_SUBJ:2MP+hA/CVSUFF_DO:3FS</pos>\n' +
'whn	uwhun~a	CVSuff-wh	you [masc.pl] <verb> them                                <pos>+uw/CVSUFF_SUBJ:2MP+hun~a/CVSUFF_DO:3FP</pos>\n' +
'wny	uwniy	CVSuff-wh	you [masc.pl] <verb> me                                  <pos>+uw/CVSUFF_SUBJ:2MP+niy/CVSUFF_DO:1S</pos>\n' +
'wnA	uwnA	CVSuff-wh	you [masc.pl] <verb> us                                  <pos>+uw/CVSUFF_SUBJ:2MP+nA/CVSUFF_DO:1P</pos>\n' +
';\n' +
'; Imperative verb suffixes that begin with long vowel "-iw" (Anti)\n' +
'y	iy	CVSuff-y	you [fem.sg.] <verb>                                     <pos>+iy/CVSUFF_SUBJ:2FS</pos>\n' +
'; with direct object\n' +
'yh	iyhi	CVSuff-yh	you [fem.sg.] <verb> it/him                              <pos>+iy/CVSUFF_SUBJ:2FS+hi/CVSUFF_DO:3MS</pos>\n' +
'yhmA	iyhimA	CVSuff-yh	you [fem.sg.] <verb> them (both)                         <pos>+iy/CVSUFF_SUBJ:2FS+himA/CVSUFF_DO:3D</pos>\n' +
'yhm	iyhim	CVSuff-yh	you [fem.sg.] <verb> them                                <pos>+iy/CVSUFF_SUBJ:2FS+him/CVSUFF_DO:3MP</pos>\n' +
'yhA	iyhA	CVSuff-yh	you [fem.sg.] <verb> it/them/her                         <pos>+iy/CVSUFF_SUBJ:2FS+hA/CVSUFF_DO:3FS</pos>\n' +
'yhn	iyhin~a	CVSuff-yh	you [fem.sg.] <verb> them                                <pos>+iy/CVSUFF_SUBJ:2FS+hin~a/CVSUFF_DO:3FP</pos>\n' +
'yny	iyniy	CVSuff-yh	you [fem.sg.] <verb> me                                  <pos>+iy/CVSUFF_SUBJ:2FS+niy/CVSUFF_DO:1S</pos>\n' +
'ynA	iynA	CVSuff-yh	you [fem.sg.] <verb> us                                  <pos>+iy/CVSUFF_SUBJ:2FS+nA/CVSUFF_DO:1P</pos>\n' +
';\n' +
'; ==========\n' +
'; perfect verb suffixes that begin with long vowel "-uw" + DO\n' +
'wh	uwhu	PVSuff-uwh	they <verb> it/him                              <pos>+uw/PVSUFF_SUBJ:3MP+hu/PVSUFF_DO:3MS</pos>\n' +
'whmA	uwhumA	PVSuff-uwh	they <verb> them (both)                         <pos>+uw/PVSUFF_SUBJ:3MP+humA/PVSUFF_DO:3D</pos>\n' +
'whm	uwhum	PVSuff-uwh	they <verb> them                                <pos>+uw/PVSUFF_SUBJ:3MP+hum/PVSUFF_DO:3MP</pos>\n' +
'whA	uwhA	PVSuff-uwh	they <verb> it/them/her                         <pos>+uw/PVSUFF_SUBJ:3MP+hA/PVSUFF_DO:3FS</pos>\n' +
'whn	uwhun~a	PVSuff-uwh	they <verb> them                                <pos>+uw/PVSUFF_SUBJ:3MP+hun~a/PVSUFF_DO:3FP</pos>\n' +
'wk	uwka	PVSuff-uwh	they <verb> you                                 <pos>+uw/PVSUFF_SUBJ:3MP+ka/PVSUFF_DO:2MS</pos>\n' +
'wk	uwki	PVSuff-uwh	they <verb> you                                 <pos>+uw/PVSUFF_SUBJ:3MP+ki/PVSUFF_DO:2FS</pos>\n' +
'wkmA	uwkumA	PVSuff-uwh	they <verb> you (both)                          <pos>+uw/PVSUFF_SUBJ:3MP+kumA/PVSUFF_DO:2D</pos>\n' +
'wkm	uwkum	PVSuff-uwh	they <verb> you                                 <pos>+uw/PVSUFF_SUBJ:3MP+kum/PVSUFF_DO:2MP</pos>\n' +
'wkn	uwkun~a	PVSuff-uwh	they <verb> you                                 <pos>+uw/PVSUFF_SUBJ:3MP+kun~a/PVSUFF_DO:2FP</pos>\n' +
'wny	uwniy	PVSuff-uwh	they <verb> me                                  <pos>+uw/PVSUFF_SUBJ:3MP+niy/PVSUFF_DO:1S</pos>\n' +
'wnA	uwnA	PVSuff-uwh	they <verb> us                                  <pos>+uw/PVSUFF_SUBJ:3MP+nA/PVSUFF_DO:1P</pos>\n' +
';\n' +
'wh	awohu	PVSuff-awh	they <verb> it/him                              <pos>+uw/PVSUFF_SUBJ:3MP+hu/PVSUFF_DO:3MS</pos>\n' +
'whmA	awohumA	PVSuff-awh	they <verb> them (both)                         <pos>+uw/PVSUFF_SUBJ:3MP+humA/PVSUFF_DO:3D</pos>\n' +
'whm	awohum	PVSuff-awh	they <verb> them                                <pos>+uw/PVSUFF_SUBJ:3MP+hum/PVSUFF_DO:3MP</pos>\n' +
'whA	awohA	PVSuff-awh	they <verb> it/them/her                         <pos>+uw/PVSUFF_SUBJ:3MP+hA/PVSUFF_DO:3FS</pos>\n' +
'whn	awohun~a	PVSuff-awh	they <verb> them                                <pos>+uw/PVSUFF_SUBJ:3MP+hun~a/PVSUFF_DO:3FP</pos>\n' +
'wk	awoka	PVSuff-awh	they <verb> you                                 <pos>+uw/PVSUFF_SUBJ:3MP+ka/PVSUFF_DO:2MS</pos>\n' +
'wk	awoki	PVSuff-awh	they <verb> you                                 <pos>+uw/PVSUFF_SUBJ:3MP+ki/PVSUFF_DO:2FS</pos>\n' +
'wkmA	awokumA	PVSuff-awh	they <verb> you (both)                          <pos>+uw/PVSUFF_SUBJ:3MP+kumA/PVSUFF_DO:2D</pos>\n' +
'wkm	awokum	PVSuff-awh	they <verb> you                                 <pos>+uw/PVSUFF_SUBJ:3MP+kum/PVSUFF_DO:2MP</pos>\n' +
'wkn	awokun~a	PVSuff-awh	they <verb> you                                 <pos>+uw/PVSUFF_SUBJ:3MP+kun~a/PVSUFF_DO:2FP</pos>\n' +
'wny	awoniy	PVSuff-awh	they <verb> me                                  <pos>+uw/PVSUFF_SUBJ:3MP+niy/PVSUFF_DO:1S</pos>\n' +
'wnA	awonA	PVSuff-awh	they <verb> us                                  <pos>+uw/PVSUFF_SUBJ:3MP+nA/PVSUFF_DO:1P</pos>\n' +
';\n' +
';\n' +
';\n' +
'; =====================================================================\n' +
'; IMPERFECT VERB SUFFIXES\n' +
'; =====================================================================\n' +
'; ==========\n' +
'; imperfect verb DO pronouns, compatible with all prefixes:\n' +
'; y---h, t---h, A---h, n---h, )\n' +
'; mood: undefined (indicative/subjunctive/jussive)\n' +
'; subject of verb: undefined (A---h, n---h, t---h, y---h)\n' +
'h	h	IVSuff-h	it/him               <pos>+hu/IVSUFF_DO:3MS</pos>\n' +
'hmA	hmA	IVSuff-h	them (both)          <pos>+humA/IVSUFF_DO:3D</pos>\n' +
'hm	hm	IVSuff-h	them                 <pos>+hum/IVSUFF_DO:3MP</pos>\n' +
'hA	hA	IVSuff-h	it/them/her          <pos>+hA/IVSUFF_DO:3FS</pos>\n' +
'hn	hn~a	IVSuff-h	them                 <pos>+hun~a/IVSUFF_DO:3FP</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb DO pronouns: 2nd person\n' +
'; (incompatible with 2nd pers. prefixes: e.g. t---k)\n' +
'; mood: undefined (indicative/subjunctive/jussive)\n' +
'; subject of verb: 1st or 3rd\n' +
'k	ka	IVSuff-k	you                  <pos>+ka/IVSUFF_DO:2MS</pos>\n' +
'k	ki	IVSuff-k	you                  <pos>+ki/IVSUFF_DO:2FS</pos>\n' +
'kmA	kumA	IVSuff-k	you (both)           <pos>+kumA/IVSUFF_DO:2D</pos>\n' +
'km	kum	IVSuff-k	you                  <pos>+kum/IVSUFF_DO:2MP</pos>\n' +
'kn	kun~a	IVSuff-k	you                  <pos>+kun~a/IVSUFF_DO:2FP</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb DO pronouns: 1st person\n' +
'; (incompatible with 1st person prefixes; e.g. A---ny, n---nA)\n' +
'; mood: undefined (indicative/subjunctive/jussive)\n' +
'; subject of verb: 2nd or 3rd\n' +
'ny	niy	IVSuff-ny-nA	me       <pos>+niy/IVSUFF_DO:1S</pos>\n' +
'nA	nA	IVSuff-ny-nA	us       <pos>+nA/IVSUFF_DO:1P</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffix that begins with consonant "n"\n' +
'; (as a consonant, it goes with short hollow stems (ta+qul+na) and long doubled (ta+morur+na)\n' +
'; mood: undefined (indicative/subjunctive/jussive)\n' +
'; subject of verb: 2nd or 3rd (Antun~a or hun~a)\n' +
'n	ona	IVSuff-n	[fem.pl.]            <pos>+na/IVSUFF_SUBJ:FP</pos>\n' +
';\n' +
'~a	IVSuff-~n	[fem.pl.]            <pos>+na/IVSUFF_SUBJ:FP</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffixes that begin with consonant "n" + 3rd/2nd pers. DO (y---n, t---n)\n' +
'; (3rd or 1st person suffixes are incompatible with 1st pers. prefixes: e.g. A---nny, n---nnA)\n' +
'; mood: undefined (indicative/subjunctive/jussive)\n' +
'; subject of verb: 2nd or 3rd (Antun~a or hun~a)\n' +
'nh	onahu	IVSuff-nh	it/him               <pos>+na/IVSUFF_SUBJ:FP+hu/IVSUFF_DO:3MS</pos>\n' +
'nhmA	onahumA	IVSuff-nh	them (both)          <pos>+na/IVSUFF_SUBJ:FP+humA/IVSUFF_DO:3D</pos>\n' +
'nhm	onahum	IVSuff-nh	them                 <pos>+na/IVSUFF_SUBJ:FP+hum/IVSUFF_DO:3MP</pos>\n' +
'nhA	onahA	IVSuff-nh	it/them/her          <pos>+na/IVSUFF_SUBJ:FP+hA/IVSUFF_DO:3FS</pos>\n' +
'nhn	onahun~a	IVSuff-nh	them                 <pos>+na/IVSUFF_SUBJ:FP+hun~a/IVSUFF_DO:3FP</pos>\n' +
'nny	onaniy	IVSuff-nh	me                   <pos>+na/IVSUFF_SUBJ:FP+niy/IVSUFF_DO:1S</pos>\n' +
'nnA	onanA	IVSuff-nh	us                   <pos>+na/IVSUFF_SUBJ:FP+nA/IVSUFF_DO:1P</pos>\n' +
';\n' +
'h	~ahu	IVSuff-~nh	it/him               <pos>+na/IVSUFF_SUBJ:FP+hu/IVSUFF_DO:3MS</pos>\n' +
'hmA	~ahumA	IVSuff-~nh	them (both)          <pos>+na/IVSUFF_SUBJ:FP+humA/IVSUFF_DO:3D</pos>\n' +
'hm	~ahum	IVSuff-~nh	them                 <pos>+na/IVSUFF_SUBJ:FP+hum/IVSUFF_DO:3MP</pos>\n' +
'hA	~ahA	IVSuff-~nh	it/them/her          <pos>+na/IVSUFF_SUBJ:FP+hA/IVSUFF_DO:3FS</pos>\n' +
'hn	~ahun~a	IVSuff-~nh	them                 <pos>+na/IVSUFF_SUBJ:FP+hun~a/IVSUFF_DO:3FP</pos>\n' +
'ny	~aniy	IVSuff-~nh	me                   <pos>+na/IVSUFF_SUBJ:FP+niy/IVSUFF_DO:1S</pos>\n' +
'nA	~anA	IVSuff-~nh	us                   <pos>+na/IVSUFF_SUBJ:FP+nA/IVSUFF_DO:1P</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffixes that begin with consonant "n" + 2nd pers. DO\n' +
'; (2nd person DO are incompatible with 2nd pers. prefix: e.g. t---nk)\n' +
'; mood: undefined (indicative/subjunctive/jussive)\n' +
'; subject of verb: 3rd (hun~a)\n' +
'nk	onaka	IVSuff-nk	you                  <pos>+na/IVSUFF_SUBJ:3FP+ka/IVSUFF_DO:2MS</pos>\n' +
'nk	onaki	IVSuff-nk	you                  <pos>+na/IVSUFF_SUBJ:3FP+ki/IVSUFF_DO:2FS</pos>\n' +
'nkmA	onakumA	IVSuff-nk	you (both)           <pos>+na/IVSUFF_SUBJ:3FP+kumA/IVSUFF_DO:2D</pos>\n' +
'nkm	onakum	IVSuff-nk	you                  <pos>+na/IVSUFF_SUBJ:3FP+kum/IVSUFF_DO:2MP</pos>\n' +
'nkn	onakun~a	IVSuff-nk	you                  <pos>+na/IVSUFF_SUBJ:3FP+kun~a/IVSUFF_DO:2FP</pos>\n' +
';\n' +
'k	~aka	IVSuff-~nk	you                  <pos>+na/IVSUFF_SUBJ:3FP+ka/IVSUFF_DO:2MS</pos>\n' +
'k	~aki	IVSuff-~nk	you                  <pos>+na/IVSUFF_SUBJ:3FP+ki/IVSUFF_DO:2FS</pos>\n' +
'kmA	~akumA	IVSuff-~nk	you (both)           <pos>+na/IVSUFF_SUBJ:3FP+kumA/IVSUFF_DO:2D</pos>\n' +
'km	~akum	IVSuff-~nk	you                  <pos>+na/IVSUFF_SUBJ:3FP+kum/IVSUFF_DO:2MP</pos>\n' +
'kn	~akun~a	IVSuff-~nk	you                  <pos>+na/IVSUFF_SUBJ:3FP+kun~a/IVSUFF_DO:2FP</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffix that begins with vowel "-A" (du., 2nd or 3rd pers.: t---A, y---A)\n' +
'; (it\'s incompatible with 1st pers. prefix: e.g. A---A, n---A)\n' +
'; mood: subjunctive or jussive\n' +
'; subject of verb: 2nd or 3rd (AntumA or humA)\n' +
'A	A	IVSuff-A	[du.]                <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ</pos>\n' +
'; ya-boda|\n' +
'IVSuff-|	[du.]                <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffixes that begin with long vowel "-A" (du.) + DO\n' +
'; mood: subjunctive or jussive\n' +
'; subject of verb: 2nd or 3rd (AntumA or humA)\n' +
'Ah	Ahu	IVSuff-Ah	it/him               <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ+hu/IVSUFF_DO:3MS</pos>\n' +
'AhmA	AhumA	IVSuff-Ah	them (both)          <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ+humA/IVSUFF_DO:3D</pos>\n' +
'Ahm	Ahum	IVSuff-Ah	them                 <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ+hum/IVSUFF_DO:3MP</pos>\n' +
'AhA	AhA	IVSuff-Ah	it/them/her          <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ+hA/IVSUFF_DO:3FS</pos>\n' +
'Ahn	Ahun~a	IVSuff-Ah	them                 <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ+hun~a/IVSUFF_DO:3FP</pos>\n' +
'Any	Aniy	IVSuff-Ah	me                   <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ+niy/IVSUFF_DO:1S</pos>\n' +
'AnA	AnA	IVSuff-Ah	us                   <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ+nA/IVSUFF_DO:1P</pos>\n' +
';\n' +
'h	hu	IVSuff-|h	it/him               <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ+hu/IVSUFF_DO:3MS</pos>\n' +
'hmA	humA	IVSuff-|h	them (both)          <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ+humA/IVSUFF_DO:3D</pos>\n' +
'hm	hum	IVSuff-|h	them                 <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ+hum/IVSUFF_DO:3MP</pos>\n' +
'hA	hA	IVSuff-|h	it/them/her          <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ+hA/IVSUFF_DO:3FS</pos>\n' +
'hn	hun~a	IVSuff-|h	them                 <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ+hun~a/IVSUFF_DO:3FP</pos>\n' +
'ny	niy	IVSuff-|h	me                   <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ+niy/IVSUFF_DO:1S</pos>\n' +
'nA	nA	IVSuff-|h	us                   <pos>+A/IVSUFF_SUBJ:D_MOOD:SJ+nA/IVSUFF_DO:1P</pos>\n' +
';\n' +
'; ==========\n' +
'; (2nd person DO are incompatible with 2nd pers. prefix: e.g. t---Ak)\n' +
'; mood: subjunctive or jussive\n' +
'; subject of verb: 3rd (humA masc/fem: y---Ak, t---Ak)\n' +
'Ak	Aka	IVSuff-Ak	you                  <pos>+A/IVSUFF_SUBJ:3D+ka/IVSUFF_DO:2MS</pos>\n' +
'Ak	Aki	IVSuff-Ak	you                  <pos>+A/IVSUFF_SUBJ:3D+ki/IVSUFF_DO:2FS</pos>\n' +
'AkmA	AkumA	IVSuff-Ak	you (both)           <pos>+A/IVSUFF_SUBJ:3D+kumA/IVSUFF_DO:2D</pos>\n' +
'Akm	Akum	IVSuff-Ak	you                  <pos>+A/IVSUFF_SUBJ:3D+kum/IVSUFF_DO:2MP</pos>\n' +
'Akn	Akun~a	IVSuff-Ak	you                  <pos>+A/IVSUFF_SUBJ:3D+kun~a/IVSUFF_DO:2FP</pos>\n' +
';\n' +
'k	ka	IVSuff-|k	you                  <pos>+A/IVSUFF_SUBJ:3D+ka/IVSUFF_DO:2MS</pos>\n' +
'k	ki	IVSuff-|k	you                  <pos>+A/IVSUFF_SUBJ:3D+ki/IVSUFF_DO:2FS</pos>\n' +
'kmA	kumA	IVSuff-|k	you (both)           <pos>+A/IVSUFF_SUBJ:3D+kumA/IVSUFF_DO:2D</pos>\n' +
'km	kum	IVSuff-|k	you                  <pos>+A/IVSUFF_SUBJ:3D+kum/IVSUFF_DO:2MP</pos>\n' +
'kn	kun~a	IVSuff-|k	you                  <pos>+A/IVSUFF_SUBJ:3D+kun~a/IVSUFF_DO:2FP</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffix that begins with vowel "-A" (du.indic.)\n' +
'; (as a vowel, it combines with the long stem of hollow verb:eg. y+quwl+An)\n' +
'; (and is incompatible with subjunctive prefix "li-")\n' +
'; mood: indicative\n' +
'; subject of verb: 3rd or 2nd (y---An, t---An)\n' +
'An	Ani	IVSuff-An	[du.]                <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I</pos>\n' +
'; ya-boda|-ni\n' +
'n	ni	IVSuff-|n	[du.]                <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffix that begins with vowel "-A" (du.indic.) + DO\n' +
'; mood: indicative\n' +
'; subject of verb: 3rd or 2nd (y---Anh, t---Anh)\n' +
'Anh	Anihi	IVSuff-Anh	it/him               <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I+hu/IVSUFF_DO:3MS</pos>\n' +
'AnhmA	AnihimA	IVSuff-Anh	them (both)          <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I+humA/IVSUFF_DO:3D</pos>\n' +
'Anhm	Anihim	IVSuff-Anh	them                 <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I+hum/IVSUFF_DO:3MP</pos>\n' +
'AnhA	AnihA	IVSuff-Anh	it/them/her          <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I+hA/IVSUFF_DO:3FS</pos>\n' +
'Anhn	Anihin~a	IVSuff-Anh	them                 <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I+hun~a/IVSUFF_DO:3FP</pos>\n' +
'Anny	Aniniy	IVSuff-Anh	me                   <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I+niy/IVSUFF_DO:1S</pos>\n' +
'AnnA	AninA	IVSuff-Anh	us                   <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I+nA/IVSUFF_DO:1P</pos>\n' +
';\n' +
'nh	nihi	IVSuff-|nh	it/him               <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I+hu/IVSUFF_DO:3MS</pos>\n' +
'nhmA	nihimA	IVSuff-|nh	them (both)          <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I+humA/IVSUFF_DO:3D</pos>\n' +
'nhm	nihim	IVSuff-|nh	them                 <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I+hum/IVSUFF_DO:3MP</pos>\n' +
'nhA	nihA	IVSuff-|nh	it/them/her          <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I+hA/IVSUFF_DO:3FS</pos>\n' +
'nhn	nihin~a	IVSuff-|nh	them                 <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I+hun~a/IVSUFF_DO:3FP</pos>\n' +
'nny	niniy	IVSuff-|nh	me                   <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I+niy/IVSUFF_DO:1S</pos>\n' +
'nnA	ninA	IVSuff-|nh	us                   <pos>+Ani/IVSUFF_SUBJ:D_MOOD:I+nA/IVSUFF_DO:1P</pos>\n' +
';\n' +
'; ==========\n' +
'; (2nd person DO are incompatible with 2nd pers. prefix: e.g. t---Ak)\n' +
'; mood: indicative\n' +
'; subject of verb: 3rd (humA masc/fem: y---Ak, t---Ak)\n' +
'Ank	Anika	IVSuff-Ank	you                  <pos>+Ani/IVSUFF_SUBJ:3D_MOOD:I+ka/IVSUFF_DO:2MS</pos>\n' +
'Ank	Aniki	IVSuff-Ank	you                  <pos>+Ani/IVSUFF_SUBJ:3D_MOOD:I+ki/IVSUFF_DO:2FS</pos>\n' +
'AnkmA	AnikumA	IVSuff-Ank	you (both)           <pos>+Ani/IVSUFF_SUBJ:3D_MOOD:I+kumA/IVSUFF_DO:2D</pos>\n' +
'Ankm	Anikum	IVSuff-Ank	you                  <pos>+Ani/IVSUFF_SUBJ:3D_MOOD:I+kum/IVSUFF_DO:2MP</pos>\n' +
'Ankn	Anikun~a	IVSuff-Ank	you                  <pos>+Ani/IVSUFF_SUBJ:3D_MOOD:I+kun~a/IVSUFF_DO:2FP</pos>\n' +
';\n' +
'nk	nika	IVSuff-|nk	you                  <pos>+Ani/IVSUFF_SUBJ:3D_MOOD:I+ka/IVSUFF_DO:2MS</pos>\n' +
'nk	niki	IVSuff-|nk	you                  <pos>+Ani/IVSUFF_SUBJ:3D_MOOD:I+ki/IVSUFF_DO:2FS</pos>\n' +
'nkmA	nikumA	IVSuff-|nk	you (both)           <pos>+Ani/IVSUFF_SUBJ:3D_MOOD:I+kumA/IVSUFF_DO:2D</pos>\n' +
'nkm	nikum	IVSuff-|nk	you                  <pos>+Ani/IVSUFF_SUBJ:3D_MOOD:I+kum/IVSUFF_DO:2MP</pos>\n' +
'nkn	nikun~a	IVSuff-|nk	you                  <pos>+Ani/IVSUFF_SUBJ:3D_MOOD:I+kun~a/IVSUFF_DO:2FP</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffix that begins with vowel "-uw"\n' +
'; mood: subjunctive or jussive\n' +
'; subject of verb: masc.pl 2nd or 3rd (Antum or hum)\n' +
'wA	uwA	IVSuff-wA	[masc.pl.]           <pos>+uwA/IVSUFF_SUBJ:MP_MOOD:SJ</pos>\n' +
'; ya-xo$aY --> ya-xo$a-0 --> ya-xo$a-woA\n' +
'wA	woA	IVSuff-awA	[masc.pl.]           <pos>+awoA/IVSUFF_SUBJ:MP_MOOD:SJ</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffixes that begin with vowel "-uw" + DO\n' +
'; mood: subjunctive or jussive\n' +
'; subject of verb: masc.pl 2nd or 3rd (Antum or hum)\n' +
'wh	uwhu	IVSuff-wh	it/him               <pos>+uw/IVSUFF_SUBJ:MP_MOOD:SJ+hu/IVSUFF_DO:3MS</pos>\n' +
'whmA	uwhumA	IVSuff-wh	them (both)          <pos>+uw/IVSUFF_SUBJ:MP_MOOD:SJ+humA/IVSUFF_DO:3D</pos>\n' +
'whm	uwhum	IVSuff-wh	them                 <pos>+uw/IVSUFF_SUBJ:MP_MOOD:SJ+hum/IVSUFF_DO:3MP</pos>\n' +
'whA	uwhA	IVSuff-wh	it/them/her          <pos>+uw/IVSUFF_SUBJ:MP_MOOD:SJ+hA/IVSUFF_DO:3FS</pos>\n' +
'whn	uwhun~a	IVSuff-wh	them                 <pos>+uw/IVSUFF_SUBJ:MP_MOOD:SJ+hun~a/IVSUFF_DO:3FP</pos>\n' +
'wny	uwniy	IVSuff-wh	me                   <pos>+uw/IVSUFF_SUBJ:MP_MOOD:SJ+niy/IVSUFF_DO:1S</pos>\n' +
'wnA	uwnA	IVSuff-wh	us                   <pos>+uw/IVSUFF_SUBJ:MP_MOOD:SJ+nA/IVSUFF_DO:1P</pos>\n' +
';\n' +
'wh	wohu	IVSuff-awh	it/him               <pos>+awo/IVSUFF_SUBJ:MP_MOOD:SJ+hu/IVSUFF_DO:3MS</pos>\n' +
'whmA	wohumA	IVSuff-awh	them (both)          <pos>+awo/IVSUFF_SUBJ:MP_MOOD:SJ+humA/IVSUFF_DO:3D</pos>\n' +
'whm	wohum	IVSuff-awh	them                 <pos>+awo/IVSUFF_SUBJ:MP_MOOD:SJ+hum/IVSUFF_DO:3MP</pos>\n' +
'whA	wohA	IVSuff-awh	it/them/her          <pos>+awo/IVSUFF_SUBJ:MP_MOOD:SJ+hA/IVSUFF_DO:3FS</pos>\n' +
'whn	wohun~a	IVSuff-awh	them                 <pos>+awo/IVSUFF_SUBJ:MP_MOOD:SJ+hun~a/IVSUFF_DO:3FP</pos>\n' +
'wny	woniy	IVSuff-awh	me                   <pos>+awo/IVSUFF_SUBJ:MP_MOOD:SJ+niy/IVSUFF_DO:1S</pos>\n' +
'wnA	wonA	IVSuff-awh	us                   <pos>+awo/IVSUFF_SUBJ:MP_MOOD:SJ+nA/IVSUFF_DO:1P</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffixes that begin with vowel "-uw" + 2nd pers. DO\n' +
'; (they are incompatible with 2nd person prefix: e.g. ta---wk)\n' +
'; mood: subjunctive or jussive\n' +
'; subject of verb: masc.pl 3rd (hum)\n' +
'wk	uwka	IVSuff-wk	you                  <pos>+uw/IVSUFF_SUBJ:3MP_MOOD:SJ+ka/IVSUFF_DO:2MS</pos>\n' +
'wk	uwki	IVSuff-wk	you                  <pos>+uw/IVSUFF_SUBJ:3MP_MOOD:SJ+ki/IVSUFF_DO:2FS</pos>\n' +
'wkmA	uwkumA	IVSuff-wk	you (both)           <pos>+uw/IVSUFF_SUBJ:3MP_MOOD:SJ+kumA/IVSUFF_DO:2D</pos>\n' +
'wkm	uwkum	IVSuff-wk	you                  <pos>+uw/IVSUFF_SUBJ:3MP_MOOD:SJ+kum/IVSUFF_DO:2MP</pos>\n' +
'wkn	uwkun~a	IVSuff-wk	you                  <pos>+uw/IVSUFF_SUBJ:3MP_MOOD:SJ+kun~a/IVSUFF_DO:2FP</pos>\n' +
';\n' +
'wk	woka	IVSuff-awk	you                  <pos>+awo/IVSUFF_SUBJ:3MP_MOOD:SJ+ka/IVSUFF_DO:2MS</pos>\n' +
'wk	woki	IVSuff-awk	you                  <pos>+awo/IVSUFF_SUBJ:3MP_MOOD:SJ+ki/IVSUFF_DO:2FS</pos>\n' +
'wkmA	wokumA	IVSuff-awk	you (both)           <pos>+awo/IVSUFF_SUBJ:3MP_MOOD:SJ+kumA/IVSUFF_DO:2D</pos>\n' +
'wkm	wokum	IVSuff-awk	you                  <pos>+awo/IVSUFF_SUBJ:3MP_MOOD:SJ+kum/IVSUFF_DO:2MP</pos>\n' +
'wkn	wokun~a	IVSuff-awk	you                  <pos>+awo/IVSUFF_SUBJ:3MP_MOOD:SJ+kun~a/IVSUFF_DO:2FP</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffix that begins with vowel "-uwna" (indic.)\n' +
'; (it\'s incompatible with subjunctive prefix "li-")\n' +
'; mood: indicative\n' +
'; subject of verb: masc.pl 2nd or 3rd (Antum or hum)\n' +
'wn	uwna	IVSuff-wn	[masc.pl.]           <pos>+uwna/IVSUFF_SUBJ:MP_MOOD:I</pos>\n' +
'; ya-xo$aY --> ya-xo$a-0 --> ya-xo$a-wona\n' +
'wn	wona	IVSuff-awn	[masc.pl.]           <pos>+wona/IVSUFF_SUBJ:MP_MOOD:I</pos>\n' +
';\n' +
'; ========== former: S049\n' +
'; imperfect verb suffixes that begin with vowel "-uwna" (indic.) + DO\n' +
'; mood: indicative\n' +
'; subject of verb: masc.pl 2nd or 3rd (Antum or hum)\n' +
'wnh	uwnahu	IVSuff-wnh	it/him               <pos>+uwna/IVSUFF_SUBJ:MP_MOOD:I+hu/IVSUFF_DO:3MS</pos>\n' +
'wnhmA	uwnahumA	IVSuff-wnh	them (both)          <pos>+uwna/IVSUFF_SUBJ:MP_MOOD:I+humA/IVSUFF_DO:3D</pos>\n' +
'wnhm	uwnahum	IVSuff-wnh	them                 <pos>+uwna/IVSUFF_SUBJ:MP_MOOD:I+hum/IVSUFF_DO:3MP</pos>\n' +
'wnhA	uwnahA	IVSuff-wnh	it/them/her          <pos>+uwna/IVSUFF_SUBJ:MP_MOOD:I+hA/IVSUFF_DO:3FS</pos>\n' +
'wnhn	uwnahun~a	IVSuff-wnh	them                 <pos>+uwna/IVSUFF_SUBJ:MP_MOOD:I+hun~a/IVSUFF_DO:3FP</pos>\n' +
'wnny	uwnaniy	IVSuff-wnh	me                   <pos>+uwna/IVSUFF_SUBJ:MP_MOOD:I+niy/IVSUFF_DO:1S</pos>\n' +
'wnnA	uwnanA	IVSuff-wnh	us                   <pos>+uwna/IVSUFF_SUBJ:MP_MOOD:I+nA/IVSUFF_DO:1P</pos>\n' +
';\n' +
'wnh	wonahu	IVSuff-awnh	it/him               <pos>+awona/IVSUFF_SUBJ:MP_MOOD:I+hu/IVSUFF_DO:3MS</pos>\n' +
'wnhmA	wonahumA	IVSuff-awnh	them (both)          <pos>+awona/IVSUFF_SUBJ:MP_MOOD:I+humA/IVSUFF_DO:3D</pos>\n' +
'wnhm	wonahum	IVSuff-awnh	them                 <pos>+awona/IVSUFF_SUBJ:MP_MOOD:I+hum/IVSUFF_DO:3MP</pos>\n' +
'wnhA	wonahA	IVSuff-awnh	it/them/her          <pos>+awona/IVSUFF_SUBJ:MP_MOOD:I+hA/IVSUFF_DO:3FS</pos>\n' +
'wnhn	wonahun~a	IVSuff-awnh	them                 <pos>+awona/IVSUFF_SUBJ:MP_MOOD:I+hun~a/IVSUFF_DO:3FP</pos>\n' +
'wnny	wonaniy	IVSuff-awnh	me                   <pos>+awona/IVSUFF_SUBJ:MP_MOOD:I+niy/IVSUFF_DO:1S</pos>\n' +
'wnnA	wonanA	IVSuff-awnh	us                   <pos>+awona/IVSUFF_SUBJ:MP_MOOD:I+nA/IVSUFF_DO:1P</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffixes that begin with vowel "-uwna" (indic.) + 2nd person DO\n' +
'; (they are incompatible with 2nd pers. prefix: e.g. ta---wnk)\n' +
'; mood: indicative\n' +
'; subject of verb: masc.pl 3rd (hum)\n' +
'wnk	uwnaka	IVSuff-wnk	you                  <pos>+uwna/IVSUFF_SUBJ:3MP_MOOD:I+ka/IVSUFF_DO:2MS</pos>\n' +
'wnk	uwnaki	IVSuff-wnk	you                  <pos>+uwna/IVSUFF_SUBJ:3MP_MOOD:I+ki/IVSUFF_DO:2FS</pos>\n' +
'wnkmA	uwnakumA	IVSuff-wnk	you (both)           <pos>+uwna/IVSUFF_SUBJ:3MP_MOOD:I+kumA/IVSUFF_DO:2D</pos>\n' +
'wnkm	uwnakum	IVSuff-wnk	you                  <pos>+uwna/IVSUFF_SUBJ:3MP_MOOD:I+kum/IVSUFF_DO:2MP</pos>\n' +
'wnkn	uwnakun~a	IVSuff-wnk	you                  <pos>+uwna/IVSUFF_SUBJ:3MP_MOOD:I+kun~a/IVSUFF_DO:2FP</pos>\n' +
';\n' +
'wnk	wonaka	IVSuff-awnk	you                  <pos>+awona/IVSUFF_SUBJ:3MP_MOOD:I+ka/IVSUFF_DO:2MS</pos>\n' +
'wnk	wonaki	IVSuff-awnk	you                  <pos>+awona/IVSUFF_SUBJ:3MP_MOOD:I+ki/IVSUFF_DO:2FS</pos>\n' +
'wnkmA	wonakumA	IVSuff-awnk	you (both)           <pos>+awona/IVSUFF_SUBJ:3MP_MOOD:I+kumA/IVSUFF_DO:2D</pos>\n' +
'wnkm	wonakum	IVSuff-awnk	you                  <pos>+awona/IVSUFF_SUBJ:3MP_MOOD:I+kum/IVSUFF_DO:2MP</pos>\n' +
'wnkn	wonakun~a	IVSuff-awnk	you                  <pos>+awona/IVSUFF_SUBJ:3MP_MOOD:I+kun~a/IVSUFF_DO:2FP</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffix that begins with vowel "-iy" (subjunctive/jussive)\n' +
'; (it\'s compatible only with "ta-" prefix: e.g. ta---iy)\n' +
'; mood: subjunctive or jussive\n' +
'; subject of verb: 2nd fem.sg. (Anti)\n' +
'y	iy	IVSuff-y	[fem.sg.]            <pos>+iy/IVSUFF_SUBJ:2FS_MOOD:SJ</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffix that begins with vowel "-iy" (subjunctive/jussive) + DO\n' +
'; mood: subjunctive or jussive\n' +
'; subject of verb: 2nd fem.sg. (Anti)\n' +
'yh	iyhi	IVSuff-yh	it/him               <pos>+iy/IVSUFF_SUBJ:2FS_MOOD:SJ+hi/IVSUFF_DO:3MS</pos>\n' +
'yhmA	iyhimA	IVSuff-yh	them (both)          <pos>+iy/IVSUFF_SUBJ:2FS_MOOD:SJ+himA/IVSUFF_DO:3D</pos>\n' +
'yhm	iyhim	IVSuff-yh	them                 <pos>+iy/IVSUFF_SUBJ:2FS_MOOD:SJ+him/IVSUFF_DO:3MP</pos>\n' +
'yhA	iyhA	IVSuff-yh	it/them/her          <pos>+iy/IVSUFF_SUBJ:2FS_MOOD:SJ+hA/IVSUFF_DO:3FS</pos>\n' +
'yhn	iyhin~a	IVSuff-yh	them                 <pos>+iy/IVSUFF_SUBJ:2FS_MOOD:SJ+hin~a/IVSUFF_DO:3FP</pos>\n' +
'yny	iyniy	IVSuff-yh	me                   <pos>+iy/IVSUFF_SUBJ:2FS_MOOD:SJ+niy/IVSUFF_DO:1S</pos>\n' +
'ynA	iynA	IVSuff-yh	us                   <pos>+iy/IVSUFF_SUBJ:2FS_MOOD:SJ+nA/IVSUFF_DO:1P</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffix that begins with vowel "-iyna" (indic.)\n' +
'; (it\'s incompatible with subjunctive prefix "li-")\n' +
'; mood: indicative\n' +
'; subject of verb: 2nd fem.sg. (Anti)\n' +
'yn	iyna	IVSuff-yn	[fem.sg.]            <pos>+iyna/IVSUFF_SUBJ:2FS_MOOD:I</pos>\n' +
';\n' +
'; ==========\n' +
'; imperfect verb suffix that begins with vowel "-iyna" (indic.) + DO\n' +
'; mood: indicative\n' +
'; subject of verb: 2nd fem.sg. (Anti)\n' +
'ynh	iynahu	IVSuff-ynh	it/him               <pos>+iyna/IVSUFF_SUBJ:2FS_MOOD:I+hu/IVSUFF_DO:3MS</pos>\n' +
'ynhmA	iynahumA	IVSuff-ynh	them (both)          <pos>+iyna/IVSUFF_SUBJ:2FS_MOOD:I+humA/IVSUFF_DO:3D</pos>\n' +
'ynhm	iynahum	IVSuff-ynh	them                 <pos>+iyna/IVSUFF_SUBJ:2FS_MOOD:I+hum/IVSUFF_DO:3MP</pos>\n' +
'ynhA	iynahA	IVSuff-ynh	it/them/her          <pos>+iyna/IVSUFF_SUBJ:2FS_MOOD:I+hA/IVSUFF_DO:3FS</pos>\n' +
'ynhn	iynahun~a	IVSuff-ynh	them                 <pos>+iyna/IVSUFF_SUBJ:2FS_MOOD:I+hun~a/IVSUFF_DO:3FP</pos>\n' +
'ynny	iynaniy	IVSuff-ynh	me                   <pos>+iyna/IVSUFF_SUBJ:2FS_MOOD:I+niy/IVSUFF_DO:1S</pos>\n' +
'ynnA	iynanA	IVSuff-ynh	us                   <pos>+iyna/IVSUFF_SUBJ:2FS_MOOD:I+nA/IVSUFF_DO:1P</pos>\n' +
';\n' +
'; =====================================================================\n' +
'; FUNCTION-WORD SUFFIXES\n' +
'; =====================================================================\n' +
'; <ilay-, Ealay-, laday-, fiy-\n' +
'h	hi	FWSuff-hi	it/him            <pos>+hi/PRON_3MS</pos>\n' +
'hmA	himA	FWSuff-hi	them (both)       <pos>+himA/PRON_3D</pos>\n' +
'hm	him	FWSuff-hi	them [masc.pl.]   <pos>+him/PRON_3MP</pos>\n' +
'hA	hA	FWSuff-hi	it/them/her       <pos>+hA/PRON_3FS</pos>\n' +
'hn	hin~a	FWSuff-hi	them [fem.pl.]    <pos>+hin~a/PRON_3FP</pos>\n' +
';===============================================================================\n' +
'; >an~a, bi>an~a, <in~a, ka>an~a, li>an~a, l`kin~a "he"\n' +
'h	hu	FWSuff-hu-he	it/he             <pos>+hu/PRON_3MS</pos>\n' +
'hmA	humA	FWSuff-hu-he	they (both)       <pos>+humA/PRON_3D</pos>\n' +
'hm	hum	FWSuff-hu-he	they [masc.pl.]   <pos>+hum/PRON_3MP</pos>\n' +
'hA	hA	FWSuff-hu-he	it/they/she       <pos>+hA/PRON_3FS</pos>\n' +
'hn	hun~a	FWSuff-hu-he	they [fem.pl.]    <pos>+hun~a/PRON_3FP</pos>\n' +
';-----------------------------------------------------\n' +
'; Ean, min, ladun -- "him"\n' +
'h	hu	FWSuff-hu-him	it/him            <pos>+hu/PRON_3MS</pos>\n' +
'hmA	humA	FWSuff-hu-him	them (both)       <pos>+humA/PRON_3D</pos>\n' +
'hm	hum	FWSuff-hu-him	them [masc.pl.]   <pos>+hum/PRON_3MP</pos>\n' +
'hA	hA	FWSuff-hu-him	it/them/her       <pos>+hA/PRON_3FS</pos>\n' +
'hn	hun~a	FWSuff-hu-him	them [fem.pl.]    <pos>+hun~a/PRON_3FP</pos>\n' +
';===============================================================================\n' +
'; <ilay-, Ealay-, laday-, fiy-\n' +
'; >an~a, bi>an~a, <in~a, ka>an~a, li>an~a, l`kin~a\n' +
'; Ean, min, ladun\n' +
'k	ka	FWSuff-k	you [masc.sg.]    <pos>+ka/PRON_2MS</pos>\n' +
'k	ki	FWSuff-k	you [fem.sg.]     <pos>+ki/PRON_2FS</pos>\n' +
'kmA	kumA	FWSuff-k	you (both)        <pos>+kumA/PRON_2D</pos>\n' +
'km	kum	FWSuff-k	you [masc.pl.]    <pos>+kum/PRON_2MP</pos>\n' +
'kn	kun~a	FWSuff-k	you [fem.pl.]     <pos>+kun~a/PRON_2FP</pos>\n' +
';===============================================================================\n' +
'; <ilay-, Ealay-, laday-, fiy- "me"\n' +
'~a	FWSuff-~a	me                <pos>+~a/PRON_1S</pos>\n' +
';-----------------------------------------------------\n' +
'y	ya	FWSuff-ya	me                <pos>+ya/PRON_1S</pos>\n' +
';-----------------------------------------------------\n' +
'; >an~a, bi>an~a, <in~a, ka>an~a, li>an~a, l`kin~a "I"\n' +
'ny	niy	FWSuff-niy-I	I                 <pos>+niy/PRON_1S</pos>\n' +
';-----------------------------------------------------\n' +
'ny	niy	FWSuff-niy-me	me                 <pos>+niy/PRON_1S</pos>\n' +
';-----------------------------------------------------\n' +
'; >an~, bi>an~, <in~, ka>an~, li>an~, l`kin~ "I"\n' +
'y	iy	FWSuff-iy-I	I                 <pos>+iy/PRON_1S</pos>\n' +
';-----------------------------------------------------\n' +
'; maEa, baEoda, bayona, Einoda, etc\n' +
'y	iy	FWSuff-iy-me	me                 <pos>+iy/PRON_1S</pos>\n' +
';-----------------------------------------------------\n' +
'; Ean, min, ladun "me"\n' +
'y	~iy	FWSuff-~iy	me                <pos>+~iy/PRON_1S</pos>\n' +
';===============================================================================\n' +
'; <ilay-, Ealay-, laday-, fiy- "us"\n' +
'nA	nA	FWSuff-nA-us	us    <pos>+nA/PRON_1P</pos>\n' +
'; >an~a, bi>an~a, <in~a, ka>an~a, li>an~a, l`kin~a "we"\n' +
'nA	nA	FWSuff-nA-we	we    <pos>+nA/PRON_1P</pos>\n' +
';-----------------------------------------------------\n' +
'; >an~, bi>an~, <in~, ka>an~, li>an~, l`kin~ -- "we"\n' +
'A	A	FWSuff-A	we                <pos>+A/PRON_1P</pos>\n' +
';-----------------------------------------------------\n' +
'; Ean, min, ladun -- "us"\n' +
'A	~A	FWSuff-~A	us                <pos>+~A/PRON_1P</pos>\n' +
';\n' +
'; =============================================================================\n' +
'; EOF "dictSuffixes" Copyright (c) 2001-2002 QAMUS LLC (www.qamus.org)\n';