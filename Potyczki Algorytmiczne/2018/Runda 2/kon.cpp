#include <iostream>
#include <math.h>
#include <climits>
#include <cstdio>


using namespace std;

const long long mypow10[] = {(long long)1, (long long)1e1, (long long)1e2, (long long)1e3, (long long)1e4, (long long)1e5, (long long)1e6, (long long)1e7, (long long)1e8, (long long)1e9, (long long)1e10, (long long)1e11, (long long)1e12, (long long)1e13, (long long)1e14, (long long)1e15};


struct number{
    long long base;
    int zeroes_added;
    int counter;
    number(long long a, long long z=0, long long c=0): base(a), zeroes_added(z), counter(c){}
};


int numDigits(long long number){
    int digits = 0;
    if(number == 0) return 1;
    while (number) {
        number /= 10;
        digits++;
    }
    return digits;
}


int lexcomp(long long a, long long b){
    int _a = numDigits(a), _b = numDigits(b);
    if(_a <= _b) return a*mypow10[_b - _a] < b;
    return false;
}


bool is_prefix(long long a, long long b){
    if(a > b)
        return false;
    int diff = numDigits(b) - numDigits(a);
    b /= mypow10[diff];
    return a == b;
}


int len(number const & a){
    return numDigits(a.base) + a.zeroes_added;
}

number normalize(long long a, int length){
    int zeroes = length - numDigits(a);
    if( zeroes <= 0 )
        return number(a, 0, 0);
    int to_add = 13 - numDigits(a);
    int l = (zeroes <= to_add)? zeroes: to_add;
    return number(a*mypow10[l], zeroes - l, 0);
}

number increment(long long prefix, number const & last){
    if( last.zeroes_added > 11 || last.counter != mypow10[last.zeroes_added] - 1 )
        return number(last.base, last.zeroes_added, last.counter+1);
    int diff_digits = numDigits(last.base) - numDigits(prefix);
    long long a = prefix * mypow10[diff_digits];
    long long diff = last.base - a;
    if(prefix == last.base)
        return normalize(a, len(last) + 1);
    
    if ( diff + 1 != mypow10[diff_digits] ) // (67999, 1, 9), 67 -> (67000, 2, 0)  
        return number(a + diff + 1, last.zeroes_added, 0);
  
    return normalize(a, len(last) + 1);
}


number new_last(int a, number const & last){
    if( is_prefix(a, last.base) )
        return increment(a, last);
    
    if( lexcomp(a, last.base) ) // if a < last.base (filled with 0s)
        return normalize(a, len(last) + 1);
    return normalize(a, len(last)); // if a > last.base (filled with 0s)
}


int main(){
    std::ios::sync_with_stdio(false);

    long long n, a;
    long long res = 0;
    cin >> n;
    cin >> a;
    number last_number = number(a, 0, 0);
    n--;

    
    while(n--){
        cin >> a;
        number new_number = new_last(a, last_number);
        res += len(new_number) - numDigits(a);
        last_number = new_number;
    }

    cout << res << '\n';

    return 0;
}