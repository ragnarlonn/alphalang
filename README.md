# alphalang
Get alphabets for different languages

### Usage

```
var alphalang = new Alphalang();
console.log(alphalang.iso2EnglishName('sv') + ': ' + alphalang.iso2Uppercase('sv'));
```

The code above generates this console output:

`swedish: ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ`

### Supported languages
English (en), Russian (ru), Spanish (es), Swedish (sv)

### Methods

#### alphalang.iso2Name(isocode)
Returns the local name of the language (i.e. "русский" for russian or "español" for spanish)

#### alphalang.iso2EnglishName(isocode)
Returns the english name of the language (i.e. "russian" or "spanish")

#### alphalang.iso2Uppercase(isocode)
Returns a string containing the letters of the alphabet, in uppercase (e.g. "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" for spanish)

#### alphalang.iso2Lowercase(isocode)
Returns a string containing the letters of the alphabet, in lowercase (e.g. "abcdefghijklmnñopqrstuvwxyz" for spanish)

#### alphalang.iso2Alphabet(isocode)
Returns an object containing both uppercase and lowercase versions of the alphabet. E.g. `{"uppercase":"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ","lowercase":"abcdefghijklmnñopqrstuvwxyz"}` for spanish.

#### alphalang.isoCodes()
Returns an array of 2-letter ISO language codes for all the languages the library supports. At the time of writing, it is `["en","es","ru","sv"]`

