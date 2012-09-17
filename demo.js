var compareVersion = function (first, second) {
    var versionToArray = function(str) {
        var version = (str + '').split('.'),
            length = version.length, i = 0;
        for ( ; i < length; i++) {
            version[i] = parseInt(version[i], 10);
        }

        return version;
    }, length, i = 0, n1, n2;

    first = versionToArray(first);
    second = versionToArray(second);

    // if arrays are equal - we have equal versions
    if (first === second) {
        return 0;
    }

    length = Math.max(first.length, second.length);

    for ( ; i < length; i++) {
        n1 = first[i] || 0;
        n2 = second[i] || 0;
        if (n1 === n2) {
            continue;
        }

        return n1 - n2 > 0 ? 1 : -1;
    }
}

$(function() {
    // test code
    $('button').on('click', function() {
        var result = compareVersion($('#v1').val(), $('#v2').val());
        $('span').text((result === 1) ? ' > ' : (result === -1) ? ' < ' : ' == ');
    });
});
