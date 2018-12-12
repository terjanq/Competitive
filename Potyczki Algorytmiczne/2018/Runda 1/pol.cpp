#include <iostream>
#include <cstdio>



using namespace std;

bool type(char c){
	if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'y')
		return 0;
	return 1;
}

bool isThree(int i, string &str){
	return type(str[i]) == type(str[i-1]) && type(str[i]) == type(str[i-2]);
}

int main(){
    std::ios::sync_with_stdio(false);
    string word;
    cin >> word;
    const int n = word.size();

    if(n < 3) {
    	cout << 0 << '\n';
    	return 0;
    }

    int lastStart = -1;
    long long res = 0;

// kostka
    for(int i=2; i<n; i++){

    	if(isThree(i, word)){
    		lastStart = i-2;
    	}
    	res += lastStart + 1;
    }
    
    cout << res << "\n";
    return 0;
}