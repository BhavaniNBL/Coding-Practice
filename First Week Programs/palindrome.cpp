#include <stdio.h>
#include <string>
#include <iostream>
using namespace std;


string isPalindrome(string S)
{
    // Iterate over the range [0, N/2]
    for (int i = 0; i < S.length(); i++) {
 
        // If S[i] is not equal to
        // the S[N-i-1]
        if (S[i] != S[S.length() - i - 1]) {
            // Return No
            return "No";
        }
    }
    // Return "Yes"
    return "Yes";
}
 
// Driver Code
int main()
{
    string S = "gantn";
    cout << isPalindrome(S) << endl;
 
    return 0;
}