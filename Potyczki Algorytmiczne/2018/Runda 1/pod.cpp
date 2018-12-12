#include <iostream>

using namespace std;


int main(){
	std::ios::sync_with_stdio(false);

	int numberOf1 = 0;

	int n, a;

	cin >> n;

	for(int i=0; i<n; i++){
		cin >> a;
		if(a == 1) numberOf1++;
	}

	if(numberOf1 == 0){
		cout << "2\n2\n1 2\n";
		return 0;
	}
	if(numberOf1 == 1){
		cout << "1\n2\n1 2\n";
		return 0;
	}

	cout << "0\n2\n1 2";

	return 0;
}