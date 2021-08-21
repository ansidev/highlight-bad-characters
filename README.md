# Highlight bad characters

[![Build Status](https://dev.azure.com/ansidev0024/highlight-bad-characters/_apis/build/status/ansidev.vscode-highlight-bad-characters?branchName=main)](https://dev.azure.com/ansidev0024/highlight-bad-characters/_build/latest?definitionId=2&branchName=main)

Highlight all non-ascii characters (fork from [Highlight Dodgy Characters](https://github.com/nachocab/vscode-highlight-dodgy-characters))

![Screenshot](./screenshot.png "Screenshot")

## Features

It highlights all the non-ascii characters, including dashes, fancy quotes and emojis.

### Whitelisting

You can override the whitelist of characters that will not be highlighted in your workspace or user settings:
```
"highlightBadCharacters.whitelist": "´€£¡¿äàáâãåǎąăæçćĉčđďðèéêëěęĝģğĥìíîïıĵķĺļłľñńňöòóôõőøœŕřẞßśŝşšșťţþțüùúûűũųůŵýÿŷźžż"
```

Bonus: Config for Vietnamese characters
```
"highlightBadCharacters.whitelist": "àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ",
```

### Examples

An example file that contains dodgy characters can be found [here](./src/test/examples.txt).

## Parent projects

- [Highlight Dodgy Characters](https://github.com/nachocab/vscode-highlight-dodgy-characters)
- [Highlight Bad Chars](https://github.com/WengerK/vscode-highlight-bad-chars/)
- [Highlight Dodgy Characters for SublimeText 3](https://github.com/TuureKaunisto/highlight-dodgy-chars)
