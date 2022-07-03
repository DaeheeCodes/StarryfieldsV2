#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include<time.h>

int main () {
   int i;
   time_t t;


   int ans[4];
    char temp[4];

   srand((unsigned) time(&t));

/*
   for( i = 0 ; i < 4 ; i++ ) {
       ans[i] = (rand() % 7);
       for( i = 0 ; i < 4 ; i++ ) {
       printf("%i\n", ans[i]);
       }
   
   */
   
printf("Please enter a digit between 0-7 or enter a nondigit if you want to play the game\n");
scanf("%s", temp);


/*
printf("One more time\n");
scanf("%i", &ans[1]);
printf("Almost there\n");
scanf("%i", &ans[2]);
printf("One last time\n");
scanf("%i", &ans[3]);
*/
       ans[0] = (atoi(&temp[0]) / 1000);
       ans[1] = (atoi(&temp[0]) / 100) - (ans[0] * 10) ;
       ans[2] = (atoi(&temp[0]) / 10) - (ans[0] * 100) - (ans[1] * 10);
       ans[3] = (atoi(&temp[0]) / 1) - (ans[0] * 1000) - (ans[1] * 100) - (ans[2] * 10);


   
 // if user does not enter a valid answer  
   for( i = 0 ; i < 4 ; i++ ) {
       if ( strlen(temp) < 4) {
          for( int j = 0 ; j < 4 ; j++ ) {
       ans[j] = (rand() % 7);
       }
       
   }
   }
   
   for( int k = 0 ; k < 4 ; k++ ) {
       printf("%i\n", ans[k]);
       }
  
  
  printf("%i\n", ans[1]);
char input[4];
       
int attempt = 0;
int maxattempt = 8;

for ( if int )       
printf("Please enter your guess\n");
scanf("%s", &input);
printf("%s", input);

       
   return(0);
}