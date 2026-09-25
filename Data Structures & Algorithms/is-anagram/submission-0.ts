class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        s.toLowerCase();
        t.toLowerCase();
        if (s.length !== t.length) return false;
        // creation of a map table of ocurrences
        const ocurrences = new Map<string, number>();
        // fill the table with the character and number of ocurrences
        // if character wasn't set before override with 0 to avoid undefined then +1
        for (const char of s) ocurrences.set(char, (ocurrences.get(char) ?? 0) + 1);
        for (const char of t) {
            // then within the second word compare chars to saved occurrences
            // if not found return false if found substract from occurrences table
            const match = ocurrences.get(char);
            if (!match) return false;
            ocurrences.set(char, match -1);
        }
        return true
    }
}
