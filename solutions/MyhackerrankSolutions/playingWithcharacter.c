#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */  
    char c,lan[20],sen[50]; 
    scanf("%c",&c);
    scanf("%s", &lan);
    scanf("\n");
    scanf("%[^\n]%*c",&sen);
    printf("%c\n",c);
    printf("%s\n",lan);
    printf("%s",sen);


    return 0;
}

