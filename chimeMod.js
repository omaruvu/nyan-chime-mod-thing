Game.Upgrades["Golden cookie sound selector"].choicesFunction = function () {
    var choices = [];
    choices[0] = { name: 'No sound', icon: [0, 7] };
    choices[1] = { name: 'Chime', icon: [22, 6] };
    choices[2] = { name: 'Fortune', icon: [27, 6] };
    choices[3] = { name: 'Cymbal', icon: [9, 10] };
    choices[4] = { name: 'Squeak', icon: [8, 10] };
    choices[5] = { name: 'Nyan there\'s a wrath cookie', icon: [0, 10] };
    for (var i = 0; i < choices.length; i++) { choices[i].name = loc(choices[i].name); }

    choices[Game.chimeType].selected = 1;
    return choices;
}

Game.playGoldenCookieChime = () => {
    if (Game.chimeType == 1) PlaySound('snd/chime.mp3');
    else if (Game.chimeType == 2) PlaySound('snd/fortune.mp3');
    else if (Game.chimeType == 3) PlaySound('snd/cymbalRev.mp3');
    else if (Game.chimeType == 4) { Game.wrinklerSquishSound++; if (Game.wrinklerSquishSound > 4) { Game.wrinklerSquishSound -= 4; } PlaySound('snd/squeak' + (Game.wrinklerSquishSound) + '.mp3'); }
    else if (Game.chimeType == 5) PlaySound('snd/nyan.mp3');
}