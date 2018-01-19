class Solution {
public:
    int hammingDistance(int x, int y) {
        int z = x^y;
        
        int sum = 0;
        
        while(z>0){
            if(z%2 == 1) sum++;
            z/=2;
        }
        
        
        return sum;
    }
};