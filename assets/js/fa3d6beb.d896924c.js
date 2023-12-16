"use strict";(self.webpackChunkgeekink=self.webpackChunkgeekink||[]).push([[9383],{5679:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=a(5893),r=a(1151);const i={sidebar_position:11},s=void 0,o={id:"C/Array",title:"Array",description:"What is an Array in C ?",source:"@site/docs/C/Array.md",sourceDirName:"C",slug:"/C/Array",permalink:"/docs/C/Array",draft:!1,unlisted:!1,editUrl:"https://github.com/AdamsGeeky/docs/C/Array.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Perttern programming",permalink:"/docs/C/Perttern programming"},next:{title:"pointer",permalink:"/docs/C/pointer"}},l={},d=[{value:"What is an Array in C ?",id:"what-is-an-array-in-c-",level:2},{value:"Why do we need arrays?",id:"why-do-we-need-arrays",level:2},{value:"How to initialize an array?",id:"how-to-initialize-an-array",level:2},{value:"How to Access Array Elements ?",id:"how-to-access-array-elements-",level:2},{value:"Change Value of Array elements:",id:"change-value-of-array-elements",level:2},{value:"Getting input from the user:",id:"getting-input-from-the-user",level:2},{value:"Different types of Array in C:",id:"different-types-of-array-in-c",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"what-is-an-array-in-c-",children:"What is an Array in C ?"}),"\n",(0,t.jsx)(n.p,{children:"An array is essentially a collection of elements. The data types for all elements must be the same and store at the contiguous memory location. You must remember that the element type shall be complete whenever the array type is specified."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"For example, if you want to store 5 integers, you can create an array for it."})}),"\n",(0,t.jsx)(n.p,{children:"Unlike some other languages, in C, all elements of an array have the same type. To declare an array we use this syntax:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"type var_name[number_of_elements];\n\n/* array of 5 integers */\nint arr[5];\n"})}),"\n",(0,t.jsx)(n.p,{children:"Each element of the array is individually referenced by using an index. We can easily access the elements using an index in square brackets. The index of the array always starts with 0. It means if you want to get the first element of the array then the index must be 0."}),"\n",(0,t.jsx)(n.h2,{id:"why-do-we-need-arrays",children:"Why do we need arrays?"}),"\n",(0,t.jsx)(n.p,{children:"To understand why do we need arrays to let\u2019s consider the situation, suppose you need to get 10 student\u2019s age information and store it for some calculation. Also, we need to send the calculation result and age information to the server."}),"\n",(0,t.jsx)(n.p,{children:"Since age (in the year) is an integer type, we can store it something like below,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"int ag1, age2, age3, age4, age5, age6, age7, age8, age9, age10;\n"})}),"\n",(0,t.jsx)(n.p,{children:"If we use the integer variable like the above declaration, it will be very difficult to manipulate the data and send it to the server. The situation becomes more worst and difficult when the number of students goes beyond 100."}),"\n",(0,t.jsx)(n.p,{children:"We can resolve this issue easily with the help of an array where we just need to create an array of size n, n is the number of students. For example, if you want to store and manipulate the age of 100 students you need to create an array of size 100. Here the idea of an array is to represent many instances by one variable (One derived type)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"/Integer array of size 100\nint ages[100];\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-to-initialize-an-array",children:"How to initialize an array?"}),"\n",(0,t.jsx)(n.p,{children:"We can initialize an array while declaring it. Like below example,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"//Declaring and initializing an array\nint Data[10] = {0,1,2,3,55,6,7,8,8,9};\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you will not give the array size at the time of initialization, array size will be determined by the compiler. However, the compiler knows its size is 10 as we are initializing it with 10 elements."}),"\n",(0,t.jsx)(n.p,{children:"If an array of unknown size is initialized, its size is determined by the largest indexed element with an explicit initializer. The array type is completed at the end of its initializer list."}),"\n",(0,t.jsx)(n.h2,{id:"how-to-access-array-elements-",children:"How to Access Array Elements ?"}),"\n",(0,t.jsxs)(n.p,{children:["using ",(0,t.jsx)(n.a,{href:"/docs/C/Loops%20Statement",children:(0,t.jsx)(n.strong,{children:"for loops"})}),"\nAt the beginning of this blog post, I have already said each element of the array is individually referenced by using an index and we can easily access the elements using their index. Let\u2019s consider an example for better understanding\nSuppose you declared an array of 5 integers. The index of the array always starts with 0, so you can see below the image Data[0] is the first element of the array, the second element is Data[1], and so on\n",(0,t.jsx)(n.strong,{children:"If the size of an array is n, to access the last element, the (n-1) index is used."})]}),"\n",(0,t.jsx)(n.h2,{id:"change-value-of-array-elements",children:"Change Value of Array elements:"}),"\n",(0,t.jsx)(n.p,{children:"We can also assign a single value to the array using the subscript and index. Let\u2019s consider the below example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"/* Array of 5 integers */\nint Data[5] ={1,2,3,4,5};\n\n/* Assign 7 to third position */\n\nData[ 2 ] = 7;\n"})}),"\n",(0,t.jsx)(n.p,{children:"The above statement assigns 7 to the 3rd element in the array."}),"\n",(0,t.jsx)(n.h2,{id:"getting-input-from-the-user",children:"Getting input from the user:"}),"\n",(0,t.jsx)(n.p,{children:"Here we learn how to take input from the user and store it in an array element. Let\u2019s consider an example where we get the integer value from the user and store it in the array using the loop. In the case of an array, we know the exact size of the array, so we should use the \u201cfor loop\u201c. It will get 5 elements from the user and print them."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#include<stdio.h>\nint main()\n{\n        int arr[5];\n        int i;\n        //for getting 5 elements from user\n        for(i = 0; i < 5; i++)\n        {\n            scanf("%d",&arr[i]);\n        }\n        printf("Print array elements\\n");\n        //printing all 5 elements\n        for(i = 0; i < 5; i++)\n        {\n            printf("%d\\n",arr[i]);\n        }\n        return 0;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"different-types-of-array-in-c",children:"Different types of Array in C:"}),"\n",(0,t.jsx)(n.p,{children:"There are several variations of array types:"})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var t=a(7294);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);