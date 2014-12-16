
function print(contents){
    document.write(contents);
}

function readFile(url){
    return new Promise(function(resolve, reject){
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function(){
            if(req.status == 200){
                resolve(req.responseText);
            }
            else{
                reject(Error(req.statusText));
            }
        };
        req.onerror = function(){
            reject(Error('Network Error'));
        };
        req.send();
    });
}

function readExtensionFile(path){
    return readFile(chrome.extension.getURL(path));
}

function DictArray(){
    this.get = function(key){
        if(key in this){
            return this[key]
        }
        return [];
    };
    this.addItem = function(key, value){
        if(!(key in this)){
            this[key] = [];
        }
        this[key].push(value);
    }
}

function createMorphTableFromFile(path){
    return new Promise(function(resolve, reject) {
        readExtensionFile(path).then(function (text) {
            createMorphTableFromText(text).then(function(table){
                resolve(table);
            });
        });
    });
}

function createMorphTableFromText(text){
    return new Promise(function(resolve, reject) {
        helper = function(){
            var lines = text.split('\n');
            var table = new DictArray();
            lines.forEach(function (line) {
                if (line != '' && line[0] != ';') {
                    elems = line.split(/\s/);
                    table.addItem(elems[0], elems[1]);
                }
            });
            resolve(table);
        }
        setTimeout(helper, 0);
    });
}

function createDictTableFromFile(path){
    return new Promise(function(resolve, reject) {
        readExtensionFile(path).then(function (text) {
            createDictTable(text).then(function(table){
                resolve(table);
            });
        });
    });
}

function createDictTable(text){
    return new Promise(function(resolve, reject) {
        helper = function(){
            var lines = text.split('\n');
            var table = new DictArray();
            lines.forEach(function (line) {
                if (line != '' && line[0] != ';') {
                    var def = {};
                    elems = line.split(/\s/);

                    //TODO add root and pos
                    if(elems[1] == undefined){
                        console.log('bad elem: ',elems);
                    }
                    def.word = elems[1].trim();
                    def.morph = elems[2].trim();
                    meta = elems.slice(3).join(' ').split(/ <pos>|<\/pos> /);
                    def.def = meta[0].trim();
                    if(meta[1] == undefined){
                        meta[1] = "";
                    }
                    def.pos = meta[1].trim();
                    table.addItem(elems[0], def);
                }
            });
            resolve(table);
        }
        setTimeout(helper, 0);
    });
}


function detransliterate(word){
    for(var key in buck2uni){
        word = word.replace(key, buck2uni[key]);
    }
    return word;
}

function transliterate(word){
    for(var key in buck2uni){
        word = word.replace(buck2uni[key], key);
    }
    return word;
}

var buck2uni = {
    "'": "\u0621",  // hamza-on-the-line
    "|": "\u0622",  // madda
    ">": "\u0623",  // hamza-on-'alif
    "&": "\u0624",  // hamza-on-waaw
    "<": "\u0625",  // hamza-under-'alif
    "}": "\u0626",  // hamza-on-yaa'
    "A": "\u0627",  // bare 'alif
    "b": "\u0628",  // baa'
    "p": "\u0629",  // taa' marbuuTa
    "t": "\u062A",  // taa'
    "v": "\u062B",  // thaa'
    "j": "\u062C",  // jiim
    "H": "\u062D",  // Haa'
    "x": "\u062E",  // khaa'
    "d": "\u062F",  // daal
    "*": "\u0630",  // dhaal
    "r": "\u0631",  // raa'
    "z": "\u0632",  // zaay
    "s": "\u0633",  // siin
    "$": "\u0634",  // shiin
    "S": "\u0635",  // Saad
    "D": "\u0636",  // Daad
    "T": "\u0637",  // Taa'
    "Z": "\u0638",  // Zaa' (DHaa')
    "E": "\u0639",  // cayn
    "g": "\u063A",  // ghayn
    "_": "\u0640",  // taTwiil
    "f": "\u0641",  // faa'
    "q": "\u0642",  // qaaf
    "k": "\u0643",  // kaaf
    "l": "\u0644",  // laam
    "m": "\u0645",  // miim
    "n": "\u0646",  // nuun
    "h": "\u0647",  // haa'
    "w": "\u0648",  // waaw
    "Y": "\u0649",  // 'alif maqSuura
    "y": "\u064A",  // yaa'
    "F": "\u064B",  // fatHatayn
    "N": "\u064C",  // Dammatayn
    "K": "\u064D",  // kasratayn
    "a": "\u064E",  // fatHa
    "u": "\u064F",  // Damma
    "i": "\u0650",  // kasra
    "~": "\u0651",  // shaddah
    "o": "\u0652",  // sukuun
    "`": "\u0670",  // dagger 'alif
    "{": "\u0671"   // waSla
};


var uni2buck = {};
for (var key in buck2uni){
    uni2buck[buck2uni[key]] = key;
}

function ArabicWord(arabic_word){
    // TODO check if need to handle alif and ya
    // TODO Implement if needed
}

function lookup(word){
    //takes in arabic word, returns arabic
    word = transliterate(word);
    var data = [];
    for(var i = 0; i < word.length; i++){
        for(var j = i; j <= word.length; j++){
            var current = lookupPrefStemSuff(word.slice(0, i), word.slice(i, j), word.slice(j));
            data = data.concat(current);

        }
    }
    return data;
}

function lookupPrefStemSuff(pref, stem, suff){
    var prefMatches = dictprefs.get(pref);
    var stemMatches = dictstems.get(stem);
    var suffMatches = dictsuffs.get(suff);

    var data = [];

    prefMatches.forEach(function(pref){
       stemMatches.forEach(function(stem){
           suffMatches.forEach(function(suff){
               if(isObeysGrammar(pref.morph, stem.morph, suff.morph)) {
                   var combine = {};
                   combine.word =
                       [detransliterate(pref.word), detransliterate(stem.word), detransliterate(suff.word)].join('');
                   combine.def = [pref.def, stem.def, suff.def].join(', ');
                   combine.pos = [pref.pos, stem.pos, suff.pos].join(', ');
                   combine.morph = [pref.morph, stem.morph, suff.morph].join(', ');
                   data.push(combine);
               }
           });
       });
    });

    return data;
}

function isObeysGrammar(prefMorph, stemMorph, suffMorph){
    return tableab.get(prefMorph).indexOf(stemMorph) != -1
        && tablebc.get(stemMorph).indexOf(suffMorph) != -1
        && tableac.get(prefMorph).indexOf(suffMorph) != -1;
}

// Loading dictionary code
// TODO remove bad whitespace in data and add root

var initialized = false;
var dictstems;
var dictprefs;
var dictsuffs;
var tableab;
var tablebc;
var tableac;

function loadDictData() {
    var f = [];
    f[0] = createDictTableFromFile('data/dictstems');
    f[1] = createDictTableFromFile('data/dictprefixes');
    f[2] = createDictTableFromFile('data/dictsuffixes');
    f[3] = createMorphTableFromFile('data/tableab');
    f[4] = createMorphTableFromFile('data/tablebc');
    f[5] = createMorphTableFromFile('data/tableac');
    return Promise.all(f).then(function (values) {
        dictstems = values[0];
        dictprefs = values[1];
        dictsuffs = values[2];
        tableab = values[3];
        tablebc = values[4];
        tableac = values[5];
        initialized = true;
        console.log('initialization complete');
    });

};

// injecting code
var arabicChars = "";
for(var char in uni2buck){
    arabicChars += char;
}
var arabicWordRegex = new RegExp("([" + arabicChars+"]+)");
function isArabicWord(text){
    return arabicWordRegex.test(text);
}

function wrapArabicWords(element){
    // puts spans around arabic words

    var curElem, a=[], walk=document.createTreeWalker( element , NodeFilter.SHOW_TEXT, null, false);
    while(curElem=walk.nextNode()){
        var regex= new RegExp("([" + arabicChars+"]+)");
        //console.log(curElem.nodeValue);
        //curElem.nodeValue = "blocked";
        curElem.nodeValue = curElem.nodeValue.replace(regex, "<span>$1</span>");
    }
    /*element.childNodes.forEach(function(child){
        wrapArabicWords(child);
    });
    if(element.nodeType == Node.TEXT_NODE){
        var regex = new RegExp("[" + arabicChars+"]+");
        element.value = element.value.replace(regex, "<span>$0</span>")
    }*/
}

function getWordDataAtPoint(elem, x, y) {
    if(elem.nodeType == elem.TEXT_NODE) {
        var range = elem.ownerDocument.createRange();
        range.selectNodeContents(elem);
        var currentPos = 0;
        var endPos = range.endOffset;
        while(currentPos+1 < endPos) {
            range.setStart(elem, currentPos);
            range.setEnd(elem, currentPos+1);
            if(range.getBoundingClientRect().left <= x && range.getBoundingClientRect().right  >= x &&
                range.getBoundingClientRect().top  <= y && range.getBoundingClientRect().bottom >= y) {
                range.expand("word");
                var ret = range.toString();
                range.detach();
                //console.log(range.getBoundingClientRect());
                var wordData = {"word": ret, "boundingRect": range.getBoundingClientRect()};
                return(wordData);
            }
            currentPos += 1;
        }
    } else {
        for(var i = 0; i < elem.childNodes.length; i++) {
            var range = elem.childNodes[i].ownerDocument.createRange();
            range.selectNodeContents(elem.childNodes[i]);
            if(range.getBoundingClientRect().left <= x && range.getBoundingClientRect().right  >= x &&
                range.getBoundingClientRect().top  <= y && range.getBoundingClientRect().bottom >= y) {
                range.detach();
                return(getWordDataAtPoint(elem.childNodes[i], x, y));
            } else {
                range.detach();
            }
        }
    }
    return(null);
}

var popupDiv;
var openTip;
var tooltipContent = "crap";

function showPopupDefinition(wordData){
    //TODO decision to show shouldnt be here
    var result = lookup(wordData.word)[0];
    var text = "No definition found";
    if(result){
        text = result.def;
    }
    console.log("showing tooltip");
    popupDiv.style.visibility = 'visible';
    var rect = wordData.boundingRect;
    //popupDiv.style.top = rect.top.toString() + "px";
    console.log(popupDiv.style.top);
    //popupDiv.style.left = rect.left.toString() + "px";
    //popupDiv.style.width = rect.width.toString() + "px";
    //popupDiv.style.height = rect.height.toString() + "px";
    openTip.setContent(text);
    openTip.prepareToShow();

}

function createPopupDiv(){
    popupDiv = document.createElement('div');
    document.body.appendChild(popupDiv);
    popupDiv.id = "arabic-dictionary-popup-31245";

    popupDiv.style.zIndex = '99999999';
    popupDiv.style.width = '0px';
    popupDiv.style.height = '0px';
    popupDiv.style.visibility = 'visible';
    popupDiv.style.position = 'fixed';
    //popupDiv.style.background = "white";
    openTip = new Opentip(popupDiv, {style: 'glass', showOn: null});
    /*openTip = new Opentip(popupDiv,
        { showOn: null,style: 'glass', target: popupDiv, tipJoint: "bottom" });*/
    var tip = new Opentip(document.getElementById("comp-top-stories-promo"), "hello");


    //popupDiv.innerHTML = "hello there!";
    //popupDiv.style.background = "white";


}

function mousemoveLookup(e){
    var wordData = getWordDataAtPoint(e.target, e.x, e.y);
    if(wordData === null){
        //openTip.hide();
    }
    else if(isArabicWord(wordData.word)){
        console.log(wordData.word);
        showPopupDefinition(wordData);
    }
}

function initialize(){
    loadDictData().then(function(){
        // injecting popup
        createPopupDiv();

        //TODO handle if there is existing handler
        document.documentElement.onmousemove = mousemoveLookup;

    })
}

initialize();


/*
loadDictData().then(function(){
    console.log("lookup: ", lookup("يكتب"));

});*/
