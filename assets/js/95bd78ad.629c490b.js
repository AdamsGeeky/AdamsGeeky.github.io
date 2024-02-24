"use strict";(self.webpackChunkgeekink=self.webpackChunkgeekink||[]).push([[6371],{7538:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=r(5893),t=r(1151);const i={sidebar_position:3},l="project 2",a={id:"C/ass1",title:"project 2",description:"1. Get User Input:",source:"@site/docs/C/ass1.mdx",sourceDirName:"C",slug:"/C/ass1",permalink:"/docs/C/ass1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"project 1",permalink:"/docs/C/ass"},next:{title:"project 3",permalink:"/docs/C/ass2"}},d={},o=[];function c(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"project-2",children:"project 2"}),"\n",(0,s.jsx)(n.h1,{id:"algorithm",children:"Algorithm"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Get User Input:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Display a prompt asking the user to enter the number of courses."}),"\n",(0,s.jsx)(n.li,{children:"Read the user input and store it in the variable numCourses."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Validate Number of Courses:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check if numCourses is less than or equal to 0."}),"\n",(0,s.jsx)(n.li,{children:"If true, display an error message and exit the program with an error code."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Initialize Variables:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Initialize totalCredits and totalGradePoints to 0.0.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Loop for Each Course:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use a for loop to iterate from 1 to numCourses."}),"\n",(0,s.jsxs)(n.li,{children:["Inside the loop:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Display a prompt for course details (course number)."}),"\n",(0,s.jsx)(n.li,{children:"Read and store user input for course credits in the variable credits."}),"\n",(0,s.jsx)(n.li,{children:"Read and store user input for course grade in the variable grade."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Validate Grade:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check if grade is outside the valid range of 0 to 100."}),"\n",(0,s.jsx)(n.li,{children:"If true, display an error message and exit the program with an error code."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Calculate Grade Points:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Call the calculateGradePoints function, passing the entered grade."}),"\n",(0,s.jsx)(n.li,{children:"Store the result in the variable gradePoints."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Update Total Credits and Grade Points:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Add credits to totalCredits."}),"\n",(0,s.jsx)(n.li,{children:"Add the product of credits and gradePoints to totalGradePoints."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Calculate GPA:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Calculate the GPA by dividing totalGradePoints by totalCredits. Store the result in the variable gpa."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Display GPA:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Display the calculated GPA with two decimal places."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Exit Successfully:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Return 0 to indicate successful program execution."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-C",children:'#include <stdio.h>\n\ndouble calculateGradePoints(double grade) {\n    if (grade >= 70) {\n        return 5.0;\n    } else if (grade >= 60) {\n        return 4.0;\n    } else if (grade >= 50) {\n        return 3.0;\n    } else if (grade >= 45) {\n        return 2.0;\n    } else if (grade >= 40) {\n        return 1.0;\n    } else {\n        return 0.0;\n    }\n}\n\nint main() {\n    int numCourses;\n    printf("Enter the number of courses: ");\n    scanf("%d", &numCourses);\n\n    // Ensure a valid number of courses is entered\n    if (numCourses <= 0) {\n        printf("Error: Please enter a valid number of courses.\\n");\n        return 1;  // Exit with an error code\n    }\n\n    double totalCredits = 0.0;\n    double totalGradePoints = 0.0;\n\n    for (int i = 1; i <= numCourses; ++i) {\n        double credits, grade;\n        printf("\\nEnter details for Course %d:\\n", i);\n\n        // Get user input for course credits\n        printf("Enter credits for Course %d: ", i);\n        scanf("%lf", &credits);\n\n        // Get user input for course grade\n        printf("Enter grade for Course %d: ", i);\n        scanf("%lf", &grade);\n\n        // Validate the grade entered\n        if (grade < 0 || grade > 100) {\n            printf("Error: Please enter a valid grade between 0 and 100.\\n");\n            return 1;  // Exit with an error code\n        }\n\n        // Calculate grade points based on the provided scale\n        double gradePoints = calculateGradePoints(grade);\n\n        // Update total credits and grade points\n        totalCredits += credits;\n        totalGradePoints += credits * gradePoints;\n    }\n\n    // Calculate GPA\n    double gpa = totalGradePoints / totalCredits;\n\n    // Display the GPA\n    printf("\\nYour GPA is: %.2lf\\n", gpa);\n\n    return 0;  // Exit successfully\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>l});var s=r(7294);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);