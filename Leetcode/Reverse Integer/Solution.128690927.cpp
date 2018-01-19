class Solution {
public:
    int reverse(int x) {
        
        int sign = 1;
        if(x<0) { sign = -1; x*=-1; };
        int _pow = floor(log10(x));
                
        
        long long int number = 0;
        
        
        for(int i=0; x>0; i++){
            
            number = number + (long long)pow(10, _pow - i) * (x%10);
            x/=10;
        }
        
        if(number > INT_MAX) return 0;
        return sign*number;
    }
};