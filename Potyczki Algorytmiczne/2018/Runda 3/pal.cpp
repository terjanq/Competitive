#include <cstdio>

using namespace std;


const long long p = 257;
const long long M = 100000007;

// H(s) = s_0*1 + s_1*p^1 + s_2*p^2 ... s_n*p^n

long long fast_pow(long long base, long long power, long long modulus){
    long long result = 1;
    while(power > 0){
        if(power & 1 == 1){
            result = (result * base) % modulus;
        }
        power >>= 1;
        base = ( base*base ) % modulus;
    }
    return result;
}

// H(c + s) = c + H(s)*p
long long add_front(long long hash, char ch){
    return (hash*p + (long long)ch) % M;
}

// H(s + c) = H(s) + c*p^s.length
int add_back(long long hash, char ch, int length){
    return (hash + (long long)ch*fast_pow(p, length, M)) % M;
}


int main(){
    int n;
    scanf("%d", &n);

    n = 0;

    char c;
    
    c=getchar();
    while(c < 'a' || c > 'z')
        c = getchar();
    long long hash1=0, hash2=0;

    while ( c >= 'a' && c <= 'z' ) {
        hash1 = add_front(hash1, c);
        hash2 = add_back(hash2, c, n);
        c=getchar();
        n++;
    }

    if(hash1 == hash2)
        printf("TAK\n");
    else
        printf("NIE\n");

    return 0;
}