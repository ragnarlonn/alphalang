class Alphalang {
    constructor() {
        this._init();
    }
}

Alphalang.prototype.iso2Name = function (isocode) {
    if (this.languages[isocode]) return this.languages[isocode].name;
    return ""
}

Alphalang.prototype.iso2EnglishName = function(isocode) {
    if (this.languages[isocode]) return this.languages[isocode].english_name;
    return ""
}

Alphalang.prototype.iso2Alphabet = function(isocode) {
    if (this.languages[isocode]) return this.languages[isocode].alphabet;
    return ""
}

Alphalang.prototype.iso2Uppercase = function(isocode) {
    if (this.languages[isocode]) return this.languages[isocode].alphabet.uppercase;
    return ""
}

Alphalang.prototype.iso2Lowercase = function(isocode) {
    if (this.languages[isocode]) return this.languages[isocode].alphabet.lowercase;
    return ""
}

Alphalang.prototype.isoCodes = function() {
    return Object.keys(this.languages);
}

Alphalang.prorotype._init = function () {
    this.languages = {
        "en": {
            "english_name": "english",
            "name": "english",
            "alphabet": {
                "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "lowercase": "abcdefghijklmnopqrstuvwxyz"
            }
        },
        "sv": {
            "english_name": "swedish",
            "name": "svenska",
            "alphabet": {
                "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ",
                "lowercase": "abcdefghijklmnopqrstuvwxyzåäö"
            }
        },
        "ru": {
            "english_name": "russian",
            "name": "русский",
            "alphabet": {
                "uppercase": "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ",
                "lowercase": "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
            }
        },
        "es": {
            "english_name": "spanish",
            "name": "español",
            "alphabet": {
                "uppercase": "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
                "lowercase": "abcdefghijklmnñopqrstuvwxyz"
            }
        }
    };
}
