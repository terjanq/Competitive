int findPaths(int m, int n, int N, int i, int j) {
    const int MOD = 1e9 + 7;
    
    // d[0][x] --> boundary d[m+1][x] --> boundary, d[x][0] --> boundary, d[x][n+1] --> boundary
    
    if(m == 1 && n == 1) return 4;
    long long d[m + 2][n + 2][N+7];
   
   
   for(int nn=0; nn<N+7; nn++)
     for(int l = 0; l < m+2; l++) {
        for(int k = 0; k < n+2; k++){
           d[l][k][nn] = 0;
        }
    }
    
    for(int l=1; l<n+1; l++)
        d[1][l][1] = d[m][l][1] = 1;
    for(int l=1; l<m+1; l++)
        d[l][1][1] = d[l][n][1] = 1;
    
    d[1][1][1] = 2;
    d[1][n][1] = 2;
    d[m][1][1] = 2;
    d[m][n][1] = 2;

    if(m == 1) {
        for(int l=1; l<n+1; l++) d[1][l][1] = 2;
        d[1][1][1] = 3;
        d[1][n][1] = 3;
    }
    if(n == 1){
        for(int l=1; l<m+1; l++) d[l][1][1] = 2;
        d[m][1][1] = 3;
        d[1][1][1] = 3;
    }
    
    //ensuring borders are always 0
    

    
    for(int nn = 2; nn <= N; nn++){
        for(int k = 1; k < m+1; k++){
            for(int l=1; l < n+1; l++){
                d[k][l][nn] = d[k][l][1] + d[k-1][l][nn-1] + d[k+1][l][nn-1] + d[k][l-1][nn-1] + d[k][l+1][nn-1];
                d[k][l][nn]%=MOD;
            }
        }
     
    }
    
    return d[i+1][j+1][N];
    
    
    
}