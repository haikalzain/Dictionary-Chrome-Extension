var dictprefixesraw = '' +
'; ==========================================================================\n' +
'; "dictPrefixes"\n' +
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
'; (1) the prefix (or concatenation of prefixes) WITHOUT short vowels and diacritics\n' +
'; (2) the prefix (or concatenation of prefixes) WITH    short vowels and diacritics\n' +
'; (3) its morphological category (for controlling its compatibility with stems & suffixes)\n' +
'; (4) its English gloss(es): includes POS data within tags <pos>...</pos>\n' +
'; ==========================================================================\n' +
';\n' +
'; The first category is the null prefix (has a null gloss as well):\n' +
'Pref-0\n' +
';\n' +
'; conjunctions\n' +
'w	wa	Pref-Wa	and <pos>wa/CONJ+</pos>\n' +
'f	fa	Pref-Wa	and;so <pos>fa/CONJ+</pos>\n' +
';\n' +
'; prepositions\n' +
'; incompatible with noun suffix categories that are "nominative"\n' +
'b	bi	NPref-Bi	by;with <pos>bi/PREP+</pos>\n' +
'k	ka	NPref-Bi	like;such as <pos>ka/PREP+</pos>\n' +
'; concatenations\n' +
'wb	wabi	NPref-Bi	and + by/with <pos>wa/CONJ+bi/PREP+</pos>\n' +
'fb	fabi	NPref-Bi	and + by/with <pos>fa/CONJ+bi/PREP+</pos>\n' +
'wk	waka	NPref-Bi	and + like/such as <pos>wa/CONJ+ka/PREP+</pos>\n' +
'fk	faka	NPref-Bi	and + like/such as <pos>fa/CONJ+ka/PREP+</pos>\n' +
';\n' +
'; preposition li- (precedes nouns)\n' +
'; incompatible with noun suffix categories that are "nominative"\n' +
'l	li	NPref-Li	for/to <pos>li/PREP+</pos>\n' +
'; conj. + prep. li-\n' +
'wl	wali	NPref-Li	and + for/to <pos>wa/CONJ+li/PREP+</pos>\n' +
'fl	fali	NPref-Li	and + for/to <pos>fa/CONJ+li/PREP+</pos>\n' +
';\n' +
'; emphatic particle la- (precedes nouns)\n' +
'; incompatible with suffix feature "genitive/accusative"\n' +
'l	la	NPref-La	indeed/truly <pos>la/EMPHATIC_PARTICLE+</pos>\n' +
';\n' +
'; result clause particle (laam jawaab al-sharT -- precedes perfect verb)\n' +
'l	la	PVPref-La	would have <pos>la/RESULT_CLAUSE_PARTICLE+</pos>\n' +
';\n' +
'; definite article (incompatible with all poss.pron. sufixes)\n' +
'Al	Al	NPref-Al	the <pos>Al/DET+</pos>\n' +
'; conj. + def.art\n' +
'wAl	waAl	NPref-Al	and + the        <pos>wa/CONJ+Al/DET+</pos>\n' +
'fAl	faAl	NPref-Al	and/so + the     <pos>fa/CONJ+Al/DET+</pos>\n' +
';\n' +
'; prep. + def.art.\n' +
'bAl	biAl	NPref-BiAl	with/by + the                     <pos>bi/PREP+Al/DET+</pos>\n' +
'kAl	kaAl	NPref-BiAl	like/such as + the                <pos>ka/PREP+Al/DET+</pos>\n' +
'; conj. + prep. + def.art.\n' +
'wbAl	wabiAl	NPref-BiAl	and + with/by the         <pos>wa/CONJ+bi/PREP+Al/DET+</pos>\n' +
'fbAl	fabiAl	NPref-BiAl	and/so + with/by + the    <pos>fa/CONJ+bi/PREP+Al/DET+</pos>\n' +
'wkAl	wakaAl	NPref-BiAl	and + like/such as + the  <pos>wa/CONJ+ka/PREP+Al/DET+</pos>\n' +
'fkAl	fakaAl	NPref-BiAl	and + like/such as + the  <pos>fa/CONJ+ka/PREP+Al/DET+</pos>\n' +
';\n' +
'; li- + def.art.\n' +
'll	lil	NPref-Lil	to/for + the                  <pos>li/PREP+Al/DET+</pos>\n' +
'wll	walil	NPref-Lil	and + to/for + the    <pos>wa/CONJ+li/PREP+Al/DET+</pos>\n' +
'fll	falil	NPref-Lil	and/so to/for + the   <pos>fa/CONJ+li/PREP+Al/DET+</pos>\n' +
';\n' +
'; li- + def.art. (for stems beginning with "l",; eg. liqA\': llqA\' = li-liqA\' or li-Al-liqA\'\n' +
'l	li	NPref-LiAl	to/for + the                  <pos>li/PREP+Al/DET+</pos>\n' +
'wl	wali	NPref-LiAl	and + to/for + the    <pos>wa/CONJ+li/PREP+Al/DET+</pos>\n' +
'fl	fali	NPref-LiAl	and/so to/for + the   <pos>fa/CONJ+li/PREP+Al/DET+</pos>\n' +
';\n' +
';-------------------------------------------------------------------------------------------------\n' +
'; imperfect verb prefix: 3rd pers.masc.sg. (huwa)\n' +
'y	ya	IVPref-hw-ya	he/it <pos>ya/IV3MS+</pos>\n' +
'y	yu	IVPref-hw-yu	he/it <pos>yu/IV3MS+</pos>\n' +
'wy	waya	IVPref-hw-ya	and + he/it <pos>wa/CONJ+ya/IV3MS+</pos>\n' +
'wy	wayu	IVPref-hw-yu	and + he/it <pos>wa/CONJ+yu/IV3MS+</pos>\n' +
'fy	faya	IVPref-hw-ya	and/so + he/it <pos>fa/CONJ+ya/IV3MS+</pos>\n' +
'fy	fayu	IVPref-hw-yu	and/so + he/it <pos>fa/CONJ+yu/IV3MS+</pos>\n' +
'sy	saya	IVPref-hw-ya	will + he/it <pos>sa/FUT+ya/IV3MS+</pos>\n' +
'sy	sayu	IVPref-hw-yu	will + he/it <pos>sa/FUT+yu/IV3MS+</pos>\n' +
'wsy	wasaya	IVPref-hw-ya	and + will + he/it <pos>wa/CONJ+sa/FUT+ya/IV3MS+</pos>\n' +
'wsy	wasayu	IVPref-hw-yu	and + will + he/it <pos>wa/CONJ+sa/FUT+yu/IV3MS+</pos>\n' +
'fsy	fasaya	IVPref-hw-ya	and/so + will + he/it <pos>fa/CONJ+sa/FUT+ya/IV3MS+</pos>\n' +
'fsy	fasayu	IVPref-hw-yu	and/so + will + he/it <pos>fa/CONJ+sa/FUT+yu/IV3MS+</pos>\n' +
';\n' +
'; imperfect verb prefix: 3rd pers.du. (humA) masc.\n' +
'y	ya	IVPref-hmA-ya	they (both) <pos>ya/IV3MD+</pos>\n' +
'y	yu	IVPref-hmA-yu	they (both) <pos>yu/IV3MD+</pos>\n' +
'wy	waya	IVPref-hmA-ya	and + they (both) <pos>wa/CONJ+ya/IV3MD+</pos>\n' +
'wy	wayu	IVPref-hmA-yu	and + they (both) <pos>wa/CONJ+yu/IV3MD+</pos>\n' +
'fy	faya	IVPref-hmA-ya	and/so + they (both) <pos>fa/CONJ+ya/IV3MD+</pos>\n' +
'fy	fayu	IVPref-hmA-yu	and/so + they (both) <pos>fa/CONJ+yu/IV3MD+</pos>\n' +
'sy	saya	IVPref-hmA-ya	will + they (both) <pos>sa/FUT+ya/IV3MD+</pos>\n' +
'sy	sayu	IVPref-hmA-yu	will + they (both) <pos>sa/FUT+yu/IV3MD+</pos>\n' +
'wsy	wasaya	IVPref-hmA-ya	and + will + they (both) <pos>wa/CONJ+sa/FUT+ya/IV3MD+</pos>\n' +
'wsy	wasayu	IVPref-hmA-yu	and + will + they (both) <pos>wa/CONJ+sa/FUT+yu/IV3MD+</pos>\n' +
'fsy	fasaya	IVPref-hmA-ya	and/so + will + they (both) <pos>fa/CONJ+sa/FUT+ya/IV3MD+</pos>\n' +
'fsy	fasayu	IVPref-hmA-yu	and/so + will + they (both) <pos>fa/CONJ+sa/FUT+yu/IV3MD+</pos>\n' +
';\n' +
'; imperfect verb prefix: 3rd pers.masc.pl. (hum)\n' +
'y	ya	IVPref-hm-ya	they (people) <pos>ya/IV3MP+</pos>\n' +
'y	yu	IVPref-hm-yu	they (people) <pos>yu/IV3MP+</pos>\n' +
'wy	waya	IVPref-hm-ya	and + they (people) <pos>wa/CONJ+ya/IV3MP+</pos>\n' +
'wy	wayu	IVPref-hm-yu	and + they (people) <pos>wa/CONJ+yu/IV3MP+</pos>\n' +
'fy	faya	IVPref-hm-ya	and/so + they (people) <pos>fa/CONJ+ya/IV3MP+</pos>\n' +
'fy	fayu	IVPref-hm-yu	and/so + they (people) <pos>fa/CONJ+yu/IV3MP+</pos>\n' +
'sy	saya	IVPref-hm-ya	will + they (people) <pos>sa/FUT+ya/IV3MP+</pos>\n' +
'sy	sayu	IVPref-hm-yu	will + they (people) <pos>sa/FUT+yu/IV3MP+</pos>\n' +
'wsy	wasaya	IVPref-hm-ya	and + will + they (people) <pos>wa/CONJ+sa/FUT+ya/IV3MP+</pos>\n' +
'wsy	wasayu	IVPref-hm-yu	and + will + they (people) <pos>wa/CONJ+sa/FUT+yu/IV3MP+</pos>\n' +
'fsy	fasaya	IVPref-hm-ya	and/so + will + they (people) <pos>fa/CONJ+sa/FUT+ya/IV3MP+</pos>\n' +
'fsy	fasayu	IVPref-hm-yu	and/so + will + they (people) <pos>fa/CONJ+sa/FUT+yu/IV3MP+</pos>\n' +
';\n' +
'; imperfect verb prefix: 3rd pers.fem.pl. (hun~a)\n' +
'y	ya	IVPref-hn-ya	they (women) <pos>ya/IV3FP+</pos>\n' +
'y	yu	IVPref-hn-yu	they (women) <pos>yu/IV3FP+</pos>\n' +
'wy	waya	IVPref-hn-ya	and + they (women) <pos>wa/CONJ+ya/IV3FP+</pos>\n' +
'wy	wayu	IVPref-hn-yu	and + they (women) <pos>wa/CONJ+yu/IV3FP+</pos>\n' +
'fy	faya	IVPref-hn-ya	and/so + they (women) <pos>fa/CONJ+ya/IV3FP+</pos>\n' +
'fy	fayu	IVPref-hn-yu	and/so + they (women) <pos>fa/CONJ+yu/IV3FP+</pos>\n' +
'sy	saya	IVPref-hn-ya	will + they (women) <pos>sa/FUT+ya/IV3FP+</pos>\n' +
'sy	sayu	IVPref-hn-yu	will + they (women) <pos>sa/FUT+yu/IV3FP+</pos>\n' +
'wsy	wasaya	IVPref-hn-ya	and + will + they (women) <pos>wa/CONJ+sa/FUT+ya/IV3FP+</pos>\n' +
'wsy	wasayu	IVPref-hn-yu	and + will + they (women) <pos>wa/CONJ+sa/FUT+yu/IV3FP+</pos>\n' +
'fsy	fasaya	IVPref-hn-ya	and/so + will + they (women) <pos>fa/CONJ+sa/FUT+ya/IV3FP+</pos>\n' +
'fsy	fasayu	IVPref-hn-yu	and/so + will + they (women) <pos>fa/CONJ+sa/FUT+yu/IV3FP+</pos>\n' +
';\n' +
'; subjunctive li- + imperfect verb prefix: 3rd pers.masc.sg. (huwa)\n' +
'ly	liya	IVPref-hw-liya	for + him/it to <pos>li/SUBJUNC+ya/IV3MS+</pos>\n' +
'ly	liyu	IVPref-hw-liyu	for + him/it to <pos>li/SUBJUNC+yu/IV3MS+</pos>\n' +
'wly	waliya	IVPref-hw-liya	and + for + him/it to <pos>wa/CONJ+li/SUBJUNC+ya/IV3MS+</pos>\n' +
'wly	waliyu	IVPref-hw-liyu	and + for + him/it to <pos>wa/CONJ+li/SUBJUNC+yu/IV3MS+</pos>\n' +
'fly	faliya	IVPref-hw-liya	and/so + for + him/it to <pos>fa/CONJ+li/SUBJUNC+ya/IV3MS+</pos>\n' +
'fly	faliyu	IVPref-hw-liyu	and/so + for + him/it to <pos>fa/CONJ+li/SUBJUNC+yu/IV3MS+</pos>\n' +
';\n' +
'; subjunctive li- + imperfect verb prefix: 3rd pers.masc.du. (humA)\n' +
'ly	liya	IVPref-hmA-liya	for + them (both) to <pos>li/SUBJUNC+ya/IV3MD+</pos>\n' +
'ly	liyu	IVPref-hmA-liyu	for + them (both) to <pos>li/SUBJUNC+yu/IV3MD+</pos>\n' +
'wly	waliya	IVPref-hmA-liya	and + for + them (both) to <pos>wa/CONJ+li/SUBJUNC+ya/IV3MD+</pos>\n' +
'wly	waliyu	IVPref-hmA-liyu	and + for + them (both) to <pos>wa/CONJ+li/SUBJUNC+yu/IV3MD+</pos>\n' +
'fly	faliya	IVPref-hmA-liya	and/so + for + them (both) to <pos>fa/CONJ+li/SUBJUNC+ya/IV3MD+</pos>\n' +
'fly	faliyu	IVPref-hmA-liyu	and/so + for + them (both) to <pos>fa/CONJ+li/SUBJUNC+yu/IV3MD+</pos>\n' +
';\n' +
'; subjunctive li- + imperfect verb prefix: 3rd pers.masc.pl. (hum)\n' +
'ly	liya	IVPref-hm-liya	for + them (people) to <pos>li/SUBJUNC+ya/IV3MP+</pos>\n' +
'ly	liyu	IVPref-hm-liyu	for + them (people) to <pos>li/SUBJUNC+yu/IV3MP+</pos>\n' +
'wly	waliya	IVPref-hm-liya	and + for + them (people) to <pos>wa/CONJ+li/SUBJUNC+ya/IV3MP+</pos>\n' +
'wly	waliyu	IVPref-hm-liyu	and + for + them (people) to <pos>wa/CONJ+li/SUBJUNC+yu/IV3MP+</pos>\n' +
'fly	faliya	IVPref-hm-liya	and/so + for + them (people) to <pos>fa/CONJ+li/SUBJUNC+ya/IV3MP+</pos>\n' +
'fly	faliyu	IVPref-hm-liyu	and/so + for + them (people) to <pos>fa/CONJ+li/SUBJUNC+yu/IV3MP+</pos>\n' +
';\n' +
'; subjunctive li- + imperfect verb prefix: 3rd pers.fem.pl. (hun~a)\n' +
'ly	liya	IVPref-hn-liya	for + them (women) to <pos>li/SUBJUNC+ya/IV3FP+</pos>\n' +
'ly	liyu	IVPref-hn-liyu	for + them (women) to <pos>li/SUBJUNC+yu/IV3FP+</pos>\n' +
'wly	waliya	IVPref-hn-liya	and + for + them (women) to <pos>wa/CONJ+li/SUBJUNC+ya/IV3FP+</pos>\n' +
'wly	waliyu	IVPref-hn-liyu	and + for + them (women) to <pos>wa/CONJ+li/SUBJUNC+yu/IV3FP+</pos>\n' +
'fly	faliya	IVPref-hn-liya	and/so + for + them (women) to <pos>fa/CONJ+li/SUBJUNC+ya/IV3FP+</pos>\n' +
'fly	faliyu	IVPref-hn-liyu	and/so + for + them (women) to <pos>fa/CONJ+li/SUBJUNC+yu/IV3FP+</pos>\n' +
';\n' +
'; imperfect verb prefix: 3rd pers.fem.sg. (hiya)\n' +
't	ta	IVPref-hy-ta	it/they/she <pos>ta/IV3FS+</pos>\n' +
't	tu	IVPref-hy-tu	it/they/she <pos>tu/IV3FS+</pos>\n' +
'wt	wata	IVPref-hy-ta	and + it/they/she <pos>wa/CONJ+ta/IV3FS+</pos>\n' +
'wt	watu	IVPref-hy-tu	and + it/they/she <pos>wa/CONJ+tu/IV3FS+</pos>\n' +
'ft	fata	IVPref-hy-ta	and/so + it/they/she <pos>fa/CONJ+ta/IV3FS+</pos>\n' +
'ft	fatu	IVPref-hy-tu	and/so + it/they/she <pos>fa/CONJ+tu/IV3FS+</pos>\n' +
'st	sata	IVPref-hy-ta	will + it/they/she <pos>sa/FUT+ta/IV3FS+</pos>\n' +
'st	satu	IVPref-hy-tu	will + it/they/she <pos>sa/FUT+tu/IV3FS+</pos>\n' +
'wst	wasata	IVPref-hy-ta	and + will + it/they/she <pos>wa/CONJ+sa/FUT+ta/IV3FS+</pos>\n' +
'wst	wasatu	IVPref-hy-tu	and + will + it/they/she <pos>wa/CONJ+sa/FUT+tu/IV3FS+</pos>\n' +
'fst	fasata	IVPref-hy-ta	and/so + will + it/they/she <pos>fa/CONJ+sa/FUT+ta/IV3FS+</pos>\n' +
'fst	fasatu	IVPref-hy-tu	and/so + will + it/they/she <pos>fa/CONJ+sa/FUT+tu/IV3FS+</pos>\n' +
';\n' +
'; imperfect verb prefix: 2nd pers.masc.sg. (Anta)\n' +
't	ta	IVPref-Anta-ta	you [masc.sg.] <pos>ta/IV2MS+</pos>\n' +
't	tu	IVPref-Anta-tu	you [masc.sg.] <pos>tu/IV2MS+</pos>\n' +
'wt	wata	IVPref-Anta-ta	and + you [masc.sg.] <pos>wa/CONJ+ta/IV2MS+</pos>\n' +
'wt	watu	IVPref-Anta-tu	and + you [masc.sg.] <pos>wa/CONJ+tu/IV2MS+</pos>\n' +
'ft	fata	IVPref-Anta-ta	and/so + you [masc.sg.] <pos>fa/CONJ+ta/IV2MS+</pos>\n' +
'ft	fatu	IVPref-Anta-tu	and/so + you [masc.sg.] <pos>fa/CONJ+tu/IV2MS+</pos>\n' +
'st	sata	IVPref-Anta-ta	will + you [masc.sg.] <pos>sa/FUT+ta/IV2MS+</pos>\n' +
'st	satu	IVPref-Anta-tu	will + you [masc.sg.] <pos>sa/FUT+tu/IV2MS+</pos>\n' +
'wst	wasata	IVPref-Anta-ta	and + will + you [masc.sg.] <pos>wa/CONJ+sa/FUT+ta/IV2MS+</pos>\n' +
'wst	wasatu	IVPref-Anta-tu	and + will + you [masc.sg.] <pos>wa/CONJ+sa/FUT+tu/IV2MS+</pos>\n' +
'fst	fasata	IVPref-Anta-ta	and/so + will + you [masc.sg.] <pos>fa/CONJ+sa/FUT+ta/IV2MS+</pos>\n' +
'fst	fasatu	IVPref-Anta-tu	and/so + will + you [masc.sg.] <pos>fa/CONJ+sa/FUT+tu/IV2MS+</pos>\n' +
';\n' +
'; imperfect verb prefix: 2nd pers.du. (AntumA)\n' +
't	ta	IVPref-AntmA-ta	you (both) <pos>ta/IV2D+</pos>\n' +
't	tu	IVPref-AntmA-tu	you (both) <pos>tu/IV2D+</pos>\n' +
'wt	wata	IVPref-AntmA-ta	and + you (both) <pos>wa/CONJ+ta/IV2D+</pos>\n' +
'wt	watu	IVPref-AntmA-tu	and + you (both) <pos>wa/CONJ+tu/IV2D+</pos>\n' +
'ft	fata	IVPref-AntmA-ta	and/so + you (both) <pos>fa/CONJ+ta/IV2D+</pos>\n' +
'ft	fatu	IVPref-AntmA-tu	and/so + you (both) <pos>fa/CONJ+tu/IV2D+</pos>\n' +
'st	sata	IVPref-AntmA-ta	will + you (both) <pos>sa/FUT+ta/IV2D+</pos>\n' +
'st	satu	IVPref-AntmA-tu	will + you (both) <pos>sa/FUT+tu/IV2D+</pos>\n' +
'wst	wasata	IVPref-AntmA-ta	and + will + you (both) <pos>wa/CONJ+sa/FUT+ta/IV2D+</pos>\n' +
'wst	wasatu	IVPref-AntmA-tu	and + will + you (both) <pos>wa/CONJ+sa/FUT+tu/IV2D+</pos>\n' +
'fst	fasata	IVPref-AntmA-ta	and/so + will + you (both) <pos>fa/CONJ+sa/FUT+ta/IV2D+</pos>\n' +
'fst	fasatu	IVPref-AntmA-tu	and/so + will + you (both) <pos>fa/CONJ+sa/FUT+tu/IV2D+</pos>\n' +
';\n' +
'; imperfect verb prefix: 3rd pers.fem.du. (humA)\n' +
't	ta	IVPref-hmA-ta	they (both) [fem.du.] <pos>ta/IV3FD+</pos>\n' +
't	tu	IVPref-hmA-tu	they (both) [fem.du.] <pos>tu/IV3FD+</pos>\n' +
'wt	wata	IVPref-hmA-ta	and + they (both) [fem.du.] <pos>wa/CONJ+ta/IV3FD+</pos>\n' +
'wt	watu	IVPref-hmA-tu	and + they (both) [fem.du.] <pos>wa/CONJ+tu/IV3FD+</pos>\n' +
'ft	fata	IVPref-hmA-ta	and/so + they (both) [fem.du.] <pos>fa/CONJ+ta/IV3FD+</pos>\n' +
'ft	fatu	IVPref-hmA-tu	and/so + they (both) [fem.du.] <pos>fa/CONJ+tu/IV3FD+</pos>\n' +
'st	sata	IVPref-hmA-ta	will + they (both) [fem.du.] <pos>sa/FUT+ta/IV3FD+</pos>\n' +
'st	satu	IVPref-hmA-tu	will + they (both) [fem.du.] <pos>sa/FUT+tu/IV3FD+</pos>\n' +
'wst	wasata	IVPref-hmA-ta	and + will + they (both) [fem.du.] <pos>wa/CONJ+sa/FUT+ta/IV3FD+</pos>\n' +
'wst	wasatu	IVPref-hmA-tu	and + will + they (both) [fem.du.] <pos>wa/CONJ+sa/FUT+tu/IV3FD+</pos>\n' +
'fst	fasata	IVPref-hmA-ta	and/so + will + they (both) [fem.du.] <pos>fa/CONJ+sa/FUT+ta/IV3FD+</pos>\n' +
'fst	fasatu	IVPref-hmA-tu	and/so + will + they (both) [fem.du.] <pos>fa/CONJ+sa/FUT+tu/IV3FD+</pos>\n' +
';\n' +
'; imperfect verb prefix: 2nd pers.fem.sg. (Anti)\n' +
't	ta	IVPref-Anti-ta	you [fem.sg.] <pos>ta/IV2FS+</pos>\n' +
't	tu	IVPref-Anti-tu	you [fem.sg.] <pos>tu/IV2FS+</pos>\n' +
'wt	wata	IVPref-Anti-ta	and + you [fem.sg.] <pos>wa/CONJ+ta/IV2FS+</pos>\n' +
'wt	watu	IVPref-Anti-tu	and + you [fem.sg.] <pos>wa/CONJ+tu/IV2FS+</pos>\n' +
'ft	fata	IVPref-Anti-ta	and/so + you [fem.sg.] <pos>fa/CONJ+ta/IV2FS+</pos>\n' +
'ft	fatu	IVPref-Anti-tu	and/so + you [fem.sg.] <pos>fa/CONJ+tu/IV2FS+</pos>\n' +
'st	sata	IVPref-Anti-ta	will + you [fem.sg.] <pos>sa/FUT+ta/IV2FS+</pos>\n' +
'st	satu	IVPref-Anti-tu	will + you [fem.sg.] <pos>sa/FUT+tu/IV2FS+</pos>\n' +
'wst	wasata	IVPref-Anti-ta	and + will + you [fem.sg.] <pos>wa/CONJ+sa/FUT+ta/IV2FS+</pos>\n' +
'wst	wasatu	IVPref-Anti-tu	and + will + you [fem.sg.] <pos>wa/CONJ+sa/FUT+tu/IV2FS+</pos>\n' +
'fst	fasata	IVPref-Anti-ta	and/so + will + you [fem.sg.] <pos>fa/CONJ+sa/FUT+ta/IV2FS+</pos>\n' +
'fst	fasatu	IVPref-Anti-tu	and/so + will + you [fem.sg.] <pos>fa/CONJ+sa/FUT+tu/IV2FS+</pos>\n' +
';\n' +
'; imperfect verb prefix: 2nd pers.masc.pl. (Antum)\n' +
't	ta	IVPref-Antm-ta	you [masc.pl.] <pos>ta/IV2MP+</pos>\n' +
't	tu	IVPref-Antm-tu	you [masc.pl.] <pos>tu/IV2MP+</pos>\n' +
'wt	wata	IVPref-Antm-ta	and + you [masc.pl.] <pos>wa/CONJ+ta/IV2MP+</pos>\n' +
'wt	watu	IVPref-Antm-tu	and + you [masc.pl.] <pos>wa/CONJ+tu/IV2MP+</pos>\n' +
'ft	fata	IVPref-Antm-ta	and/so + you [masc.pl.] <pos>fa/CONJ+ta/IV2MP+</pos>\n' +
'ft	fatu	IVPref-Antm-tu	and/so + you [masc.pl.] <pos>fa/CONJ+tu/IV2MP+</pos>\n' +
'st	sata	IVPref-Antm-ta	will + you [masc.pl.] <pos>sa/FUT+ta/IV2MP+</pos>\n' +
'st	satu	IVPref-Antm-tu	will + you [masc.pl.] <pos>sa/FUT+tu/IV2MP+</pos>\n' +
'wst	wasata	IVPref-Antm-ta	and + will + you [masc.pl.] <pos>wa/CONJ+sa/FUT+ta/IV2MP+</pos>\n' +
'wst	wasatu	IVPref-Antm-tu	and + will + you [masc.pl.] <pos>wa/CONJ+sa/FUT+tu/IV2MP+</pos>\n' +
'fst	fasata	IVPref-Antm-ta	and/so + will + you [masc.pl.] <pos>fa/CONJ+sa/FUT+ta/IV2MP+</pos>\n' +
'fst	fasatu	IVPref-Antm-tu	and/so + will + you [masc.pl.] <pos>fa/CONJ+sa/FUT+tu/IV2MP+</pos>\n' +
';\n' +
'; imperfect verb prefix: 2nd pers.fem.pl. (Antun~a)\n' +
't	ta	IVPref-Antn-ta	you [fem.pl.] <pos>ta/IV2FP+</pos>\n' +
't	tu	IVPref-Antn-tu	you [fem.pl.] <pos>tu/IV2FP+</pos>\n' +
'wt	wata	IVPref-Antn-ta	and + you [fem.pl.] <pos>wa/CONJ+ta/IV2FP+</pos>\n' +
'wt	watu	IVPref-Antn-tu	and + you [fem.pl.] <pos>wa/CONJ+tu/IV2FP+</pos>\n' +
'ft	fata	IVPref-Antn-ta	and/so + you [fem.pl.] <pos>fa/CONJ+ta/IV2FP+</pos>\n' +
'ft	fatu	IVPref-Antn-tu	and/so + you [fem.pl.] <pos>fa/CONJ+tu/IV2FP+</pos>\n' +
'st	sata	IVPref-Antn-ta	will + you [fem.pl.] <pos>sa/FUT+ta/IV2FP+</pos>\n' +
'st	satu	IVPref-Antn-tu	will + you [fem.pl.] <pos>sa/FUT+tu/IV2FP+</pos>\n' +
'wst	wasata	IVPref-Antn-ta	and + will + you [fem.pl.] <pos>wa/CONJ+sa/FUT+ta/IV2FP+</pos>\n' +
'wst	wasatu	IVPref-Antn-tu	and + will + you [fem.pl.] <pos>wa/CONJ+sa/FUT+tu/IV2FP+</pos>\n' +
'fst	fasata	IVPref-Antn-ta	and/so + will + you [fem.pl.] <pos>fa/CONJ+sa/FUT+ta/IV2FP+</pos>\n' +
'fst	fasatu	IVPref-Antn-tu	and/so + will + you [fem.pl.] <pos>fa/CONJ+sa/FUT+tu/IV2FP+</pos>\n' +
';\n' +
'; subjunctive li- + imperfect verb prefix: 3rd pers.fem.sg. (hiya)\n' +
'lt	lita	IVPref-hy-lita	for + it/them/her (to) <pos>li/SUBJUNC+ta/IV3FS+</pos>\n' +
'lt	litu	IVPref-hy-litu	for + it/them/her (to) <pos>li/SUBJUNC+tu/IV3FS+</pos>\n' +
'wlt	walita	IVPref-hy-lita	and + for + it/them/her (to) <pos>wa/CONJ+li/SUBJUNC+ta/IV3FS+</pos>\n' +
'wlt	walitu	IVPref-hy-litu	and + for + it/them/her (to) <pos>wa/CONJ+li/SUBJUNC+tu/IV3FS+</pos>\n' +
'flt	falita	IVPref-hy-lita	and/so + for + it/them/her (to) <pos>fa/CONJ+li/SUBJUNC+ta/IV3FS+</pos>\n' +
'flt	falitu	IVPref-hy-litu	and/so + for + it/them/her (to) <pos>fa/CONJ+li/SUBJUNC+tu/IV3FS+</pos>\n' +
';\n' +
'; subjunctive li- + imperfect verb prefix: 2nd pers.masc.sg. (Anta)\n' +
'lt	lita	IVPref-Anta-lita	for + you [masc.sg.] (to) <pos>li/SUBJUNC+ta/IV2MS+</pos>\n' +
'lt	litu	IVPref-Anta-litu	for + you [masc.sg.] (to) <pos>li/SUBJUNC+tu/IV2MS+</pos>\n' +
'wlt	walita	IVPref-Anta-lita	and + for + you [masc.sg.] (to) <pos>wa/CONJ+li/SUBJUNC+ta/IV2MS+</pos>\n' +
'wlt	walitu	IVPref-Anta-litu	and + for + you [masc.sg.] (to) <pos>wa/CONJ+li/SUBJUNC+tu/IV2MS+</pos>\n' +
'flt	falita	IVPref-Anta-lita	and/so + for + you [masc.sg.] (to) <pos>fa/CONJ+li/SUBJUNC+ta/IV2MS+</pos>\n' +
'flt	falitu	IVPref-Anta-litu	and/so + for + you [masc.sg.] (to) <pos>fa/CONJ+li/SUBJUNC+tu/IV2MS+</pos>\n' +
';\n' +
'; subjunctive li- + imperfect verb prefix: 2nd pers.du. (AntumA)\n' +
'lt	lita	IVPref-AntmA-lita	for + you (both) (to) <pos>li/SUBJUNC+ta/IV2D+</pos>\n' +
'lt	litu	IVPref-AntmA-litu	for + you (both) (to) <pos>li/SUBJUNC+tu/IV2D+</pos>\n' +
'wlt	walita	IVPref-AntmA-lita	and + for + you (both) (to) <pos>wa/CONJ+li/SUBJUNC+ta/IV2D+</pos>\n' +
'wlt	walitu	IVPref-AntmA-litu	and + for + you (both) (to) <pos>wa/CONJ+li/SUBJUNC+tu/IV2D+</pos>\n' +
'flt	falita	IVPref-AntmA-lita	and/so + for + you (both) (to) <pos>fa/CONJ+li/SUBJUNC+ta/IV2D+</pos>\n' +
'flt	falitu	IVPref-AntmA-litu	and/so + for + you (both) (to) <pos>fa/CONJ+li/SUBJUNC+tu/IV2D+</pos>\n' +
';\n' +
'; subjunctive li- + imperfect verb prefix: 3rd pers.fem.du. (humA)\n' +
'lt	lita	IVPref-hmA-lita	for + them (both) [fem.du.] (to) <pos>li/SUBJUNC+ta/IV3FD+</pos>\n' +
'lt	litu	IVPref-hmA-litu	for + them (both) [fem.du.] (to) <pos>li/SUBJUNC+tu/IV3FD+</pos>\n' +
'wlt	walita	IVPref-hmA-lita	and + for + them (both) [fem.du.] (to) <pos>wa/CONJ+li/SUBJUNC+ta/IV3FD+</pos>\n' +
'wlt	walitu	IVPref-hmA-litu	and + for + them (both) [fem.du.] (to) <pos>wa/CONJ+li/SUBJUNC+tu/IV3FD+</pos>\n' +
'flt	falita	IVPref-hmA-lita	and/so + for + them (both) [fem.du.] (to) <pos>fa/CONJ+li/SUBJUNC+ta/IV3FD+</pos>\n' +
'flt	falitu	IVPref-hmA-litu	and/so + for + them (both) [fem.du.] (to) <pos>fa/CONJ+li/SUBJUNC+tu/IV3FD+</pos>\n' +
';\n' +
'; subjunctive li- + imperfect verb prefix: 2nd pers.fem.sg. (Anti)\n' +
'lt	lita	IVPref-Anti-lita	for + you [fem.sg.] (to) <pos>li/SUBJUNC+ta/IV2FS+</pos>\n' +
'lt	litu	IVPref-Anti-litu	for + you [fem.sg.] (to) <pos>li/SUBJUNC+tu/IV2FS+</pos>\n' +
'wlt	walita	IVPref-Anti-lita	and + for + you [fem.sg.] (to) <pos>wa/CONJ+li/SUBJUNC+ta/IV2FS+</pos>\n' +
'wlt	walitu	IVPref-Anti-litu	and + for + you [fem.sg.] (to) <pos>wa/CONJ+li/SUBJUNC+tu/IV2FS+</pos>\n' +
'flt	falita	IVPref-Anti-lita	and/so + for + you [fem.sg.] (to) <pos>fa/CONJ+li/SUBJUNC+ta/IV2FS+</pos>\n' +
'flt	falitu	IVPref-Anti-litu	and/so + for + you [fem.sg.] (to) <pos>fa/CONJ+li/SUBJUNC+tu/IV2FS+</pos>\n' +
';\n' +
'; subjunctive li- + imperfect verb prefix: 2nd pers.masc.pl. (Antum)\n' +
'lt	lita	IVPref-Antm-lita	for + you [masc.pl.] (to) <pos>li/SUBJUNC+ta/IV2MP+</pos>\n' +
'lt	litu	IVPref-Antm-litu	for + you [masc.pl.] (to) <pos>li/SUBJUNC+tu/IV2MP+</pos>\n' +
'wlt	walita	IVPref-Antm-lita	and + for + you [masc.pl.] (to) <pos>wa/CONJ+li/SUBJUNC+ta/IV2MP+</pos>\n' +
'wlt	walitu	IVPref-Antm-litu	and + for + you [masc.pl.] (to) <pos>wa/CONJ+li/SUBJUNC+tu/IV2MP+</pos>\n' +
'flt	falita	IVPref-Antm-lita	and/so + for + you [masc.pl.] (to) <pos>fa/CONJ+li/SUBJUNC+ta/IV2MP+</pos>\n' +
'flt	falitu	IVPref-Antm-litu	and/so + for + you [masc.pl.] (to) <pos>fa/CONJ+li/SUBJUNC+tu/IV2MP+</pos>\n' +
';\n' +
'; subjunctive li- + imperfect verb prefix: 2nd pers.fem.pl. (Antun~a)\n' +
'lt	lita	IVPref-Antn-lita	for + you [fem.pl.] (to) <pos>li/SUBJUNC+ta/IV2FP+</pos>\n' +
'lt	litu	IVPref-Antn-litu	for + you [fem.pl.] (to) <pos>li/SUBJUNC+tu/IV2FP+</pos>\n' +
'wlt	walita	IVPref-Antn-lita	and + for + you [fem.pl.] (to) <pos>wa/CONJ+li/SUBJUNC+ta/IV2FP+</pos>\n' +
'wlt	walitu	IVPref-Antn-litu	and + for + you [fem.pl.] (to) <pos>wa/CONJ+li/SUBJUNC+tu/IV2FP+</pos>\n' +
'flt	falita	IVPref-Antn-lita	and/so + for + you [fem.pl.] (to) <pos>fa/CONJ+li/SUBJUNC+ta/IV2FP+</pos>\n' +
'flt	falitu	IVPref-Antn-litu	and/so + for + you [fem.pl.] (to) <pos>fa/CONJ+li/SUBJUNC+tu/IV2FP+</pos>\n' +
';\n' +
'; imperfect verb prefix: 1st pers.sg. (AnA)\n' +
'>	>a	IVPref-AnA->a	I <pos>>a/IV1S+</pos>\n' +
'>	>u	IVPref-AnA->u	I <pos>>u/IV1S+</pos>\n' +
'w>	wa>a	IVPref-AnA->a	and + I <pos>wa/CONJ+>a/IV1S+</pos>\n' +
'w>	wa>u	IVPref-AnA->u	and + I <pos>wa/CONJ+>u/IV1S+</pos>\n' +
'f>	fa>a	IVPref-AnA->a	and/so + I <pos>fa/CONJ+>a/IV1S+</pos>\n' +
'f>	fa>u	IVPref-AnA->u	and/so + I <pos>fa/CONJ+>u/IV1S+</pos>\n' +
's>	sa>a	IVPref-AnA->a	will + I <pos>sa/FUT+>a/IV1S+</pos>\n' +
's>	sa>u	IVPref-AnA->u	will + I <pos>sa/FUT+>u/IV1S+</pos>\n' +
'ws>	wasa>a	IVPref-AnA->a	and + will + I <pos>wa/CONJ+sa/FUT+>a/IV1S+</pos>\n' +
'ws>	wasa>u	IVPref-AnA->u	and + will + I <pos>wa/CONJ+sa/FUT+>u/IV1S+</pos>\n' +
'fs>	fasa>a	IVPref-AnA->a	and/so + will + I <pos>fa/CONJ+sa/FUT+>a/IV1S+</pos>\n' +
'fs>	fasa>u	IVPref-AnA->u	and/so + will + I <pos>fa/CONJ+sa/FUT+>u/IV1S+</pos>\n' +
'; orthographic variants\n' +
'A	>a	IVPref-AnA->a	I <pos>>a/IV1S+</pos>\n' +
'A	>u	IVPref-AnA->u	I <pos>>u/IV1S+</pos>\n' +
'wA	wa>a	IVPref-AnA->a	and + I <pos>wa/CONJ+>a/IV1S+</pos>\n' +
'wA	wa>u	IVPref-AnA->u	and + I <pos>wa/CONJ+>u/IV1S+</pos>\n' +
'fA	fa>a	IVPref-AnA->a	and/so + I <pos>fa/CONJ+>a/IV1S+</pos>\n' +
'fA	fa>u	IVPref-AnA->u	and/so + I <pos>fa/CONJ+>u/IV1S+</pos>\n' +
'sA	sa>a	IVPref-AnA->a	will + I <pos>sa/FUT+>a/IV1S+</pos>\n' +
'sA	sa>u	IVPref-AnA->u	will + I <pos>sa/FUT+>u/IV1S+</pos>\n' +
'wsA	wasa>a	IVPref-AnA->a	and + will + I <pos>wa/CONJ+sa/FUT+>a/IV1S+</pos>\n' +
'wsA	wasa>u	IVPref-AnA->u	and + will + I <pos>wa/CONJ+sa/FUT+>u/IV1S+</pos>\n' +
'fsA	fasa>a	IVPref-AnA->a	and/so + will + I <pos>fa/CONJ+sa/FUT+>a/IV1S+</pos>\n' +
'fsA	fasa>u	IVPref-AnA->u	and/so + will + I <pos>fa/CONJ+sa/FUT+>u/IV1S+</pos>\n' +
';\n' +
'; imperfect verb prefix: 1st pers.sg. (AnA) -- special orthography with hamza\n' +
'|	|	IVPref-AnA-|	I <pos>|/IV1S+</pos>\n' +
'w|	wa|	IVPref-AnA-|	and + I <pos>wa/CONJ+|/IV1S+</pos>\n' +
'f|	fa|	IVPref-AnA-|	and/so + I <pos>fa/CONJ+|/IV1S+</pos>\n' +
's|	sa|	IVPref-AnA-|	will + I <pos>sa/FUT+|/IV1S+</pos>\n' +
'ws|	wasa|	IVPref-AnA-|	and + will + I <pos>wa/CONJ+sa/FUT+|/IV1S+</pos>\n' +
'fs|	fasa|	IVPref-AnA-|	and/so + will + I <pos>fa/CONJ+sa/FUT+|/IV1S+</pos>\n' +
'; orthographic variants\n' +
'A	|	IVPref-AnA-|	I <pos>|/IV1S+</pos>\n' +
'wA	wa|	IVPref-AnA-|	and + I <pos>wa/CONJ+|/IV1S+</pos>\n' +
'fA	fa|	IVPref-AnA-|	and/so + I <pos>fa/CONJ+|/IV1S+</pos>\n' +
'sA	sa|	IVPref-AnA-|	will + I <pos>sa/FUT+|/IV1S+</pos>\n' +
'wsA	wasa|	IVPref-AnA-|	and + will + I <pos>wa/CONJ+sa/FUT+|/IV1S+</pos>\n' +
'fsA	fasa|	IVPref-AnA-|	and/so + will + I <pos>fa/CONJ+sa/FUT+|/IV1S+</pos>\n' +
';\n' +
'; subjunctive li- + imperfect verb prefix: 1st pers.sg. (AnA)\n' +
'l>	li>a	IVPref-AnA-li>a	for + me (to) <pos>li/SUBJUNC+>a/IV1S+</pos>\n' +
'l>	li>u	IVPref-AnA-li>u	for + me (to) <pos>li/SUBJUNC+>u/IV1S+</pos>\n' +
'wl>	wali>a	IVPref-AnA-li>a	and + for + me (to) <pos>wa/CONJ+li/SUBJUNC+>a/IV1S+</pos>\n' +
'wl>	wali>u	IVPref-AnA-li>u	and + for + me (to) <pos>wa/CONJ+li/SUBJUNC+>u/IV1S+</pos>\n' +
'fl>	fali>a	IVPref-AnA-li>a	and/so + for + me (to) <pos>fa/CONJ+li/SUBJUNC+>a/IV1S+</pos>\n' +
'fl>	fali>u	IVPref-AnA-li>u	and/so + for + me (to) <pos>fa/CONJ+li/SUBJUNC+>u/IV1S+</pos>\n' +
'; orthographic variants\n' +
'lA	li>a	IVPref-AnA-li>a	for + me (to) <pos>li/SUBJUNC+>a/IV1S+</pos>\n' +
'lA	li>u	IVPref-AnA-li>u	for + me (to) <pos>li/SUBJUNC+>u/IV1S+</pos>\n' +
'wlA	wali>a	IVPref-AnA-li>a	and + for + me (to) <pos>wa/CONJ+li/SUBJUNC+>a/IV1S+</pos>\n' +
'wlA	wali>u	IVPref-AnA-li>u	and + for + me (to) <pos>wa/CONJ+li/SUBJUNC+>u/IV1S+</pos>\n' +
'flA	fali>a	IVPref-AnA-li>a	and/so + for + me (to) <pos>fa/CONJ+li/SUBJUNC+>a/IV1S+</pos>\n' +
'flA	fali>u	IVPref-AnA-li>u	and/so + for + me (to) <pos>fa/CONJ+li/SUBJUNC+>u/IV1S+</pos>\n' +
';\n' +
'; subjunctive li- + imperfect verb prefix: 1st pers.sg. (AnA) -- special orthography with hamza\n' +
'l|	li|	IVPref-AnA-li|	for + me (to) <pos>li/SUBJUNC+|/IV1S+</pos>\n' +
'wl|	wali|	IVPref-AnA-li|	and + for + me (to) <pos>wa/CONJ+li/SUBJUNC+|/IV1S+</pos>\n' +
'fl|	fali|	IVPref-AnA-li|	and/so + for + me (to) <pos>fa/CONJ+li/SUBJUNC+|/IV1S+</pos>\n' +
'; orthographic variants\n' +
'lA	li|	IVPref-AnA-li|	for + me (to) <pos>li/SUBJUNC+|/IV1S+</pos>\n' +
'wlA	wali|	IVPref-AnA-li|	and + for + me (to) <pos>wa/CONJ+li/SUBJUNC+|/IV1S+</pos>\n' +
'flA	fali|	IVPref-AnA-li|	and/so + for + me (to) <pos>fa/CONJ+li/SUBJUNC+|/IV1S+</pos>\n' +
';\n' +
'; imperfect verb prefix: 1st pers.pl. (naHnu)\n' +
'n	na	IVPref-nHn-na	we <pos>na/IV1P+</pos>\n' +
'n	nu	IVPref-nHn-nu	we <pos>nu/IV1P+</pos>\n' +
'wn	wana	IVPref-nHn-na	and + we <pos>wa/CONJ+na/IV1P+</pos>\n' +
'wn	wanu	IVPref-nHn-nu	and + we <pos>wa/CONJ+nu/IV1P+</pos>\n' +
'fn	fana	IVPref-nHn-na	and/so + we <pos>fa/CONJ+na/IV1P+</pos>\n' +
'fn	fanu	IVPref-nHn-nu	and/so + we <pos>fa/CONJ+nu/IV1P+</pos>\n' +
'sn	sana	IVPref-nHn-na	will + we <pos>sa/FUT+na/IV1P+</pos>\n' +
'sn	sanu	IVPref-nHn-nu	will + we <pos>sa/FUT+nu/IV1P+</pos>\n' +
'wsn	wasana	IVPref-nHn-na	and + will + we <pos>wa/CONJ+sa/FUT+na/IV1P+</pos>\n' +
'wsn	wasanu	IVPref-nHn-nu	and + will + we <pos>wa/CONJ+sa/FUT+nu/IV1P+</pos>\n' +
'fsn	fasana	IVPref-nHn-na	and/so + will + we <pos>fa/CONJ+sa/FUT+na/IV1P+</pos>\n' +
'fsn	fasanu	IVPref-nHn-nu	and/so + will + we <pos>fa/CONJ+sa/FUT+nu/IV1P+</pos>\n' +
';\n' +
'; subjunctive li- + imperfect verb prefix: 1st pers.pl. (naHnu)\n' +
'ln	lina	IVPref-nHn-lina	for + us (to) <pos>li/SUBJUNC+na/IV1P+</pos>\n' +
'ln	linu	IVPref-nHn-linu	for + us (to) <pos>li/SUBJUNC+nu/IV1P+</pos>\n' +
'wln	walina	IVPref-nHn-lina	and + for + us (to) <pos>wa/CONJ+li/SUBJUNC+na/IV1P+</pos>\n' +
'wln	walinu	IVPref-nHn-linu	and + for + us (to) <pos>wa/CONJ+li/SUBJUNC+nu/IV1P+</pos>\n' +
'fln	falina	IVPref-nHn-lina	and/so + for + us (to) <pos>fa/CONJ+li/SUBJUNC+na/IV1P+</pos>\n' +
'fln	falinu	IVPref-nHn-linu	and/so + for + us (to) <pos>fa/CONJ+li/SUBJUNC+nu/IV1P+</pos>\n' +
';\n' +
'; =============================================================================\n' +
'; EOF "dictPrefixes" Copyright (c) 2001-2002 QAMUS LLC (www.qamus.org)\n';