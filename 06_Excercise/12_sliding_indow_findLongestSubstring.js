function findLongestSubstring(str){
    str = str.trim();

    if (str.length == 0) {
        return 0;
    }

    let start = 0
    let maxLength = 0
    let seen = {}

    for (let end = 0; end < str.length; end++) {
        let char = str[end]

        if (seen[char] >= start) {
            start = seen[char] + 1;
        }
        let tmpMaxLength = end - start + 1
        if (tmpMaxLength > maxLength) {
            maxLength = tmpMaxLength
        }
        seen[char] = end
    }
    console.log({maxLength});

    return maxLength
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool ') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6