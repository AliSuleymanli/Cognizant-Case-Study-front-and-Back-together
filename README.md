# Cognizant-Case-Study-front-and-Back-together

The Solution is consist of two projects:
1.Backend Web Api.
2.Front End with web component based library (Lit-Element).
front end part is written by typescript and is compiled to javascript and built with rollup.
source code of front-end is in the directory: CognizantDemo\wwwroot\js\lit-elements\warehouse-app.
to make two projects(frontend and backend) two projects could be run seperately. (Backend Api first, then front end part second, which is using datas from  backend api ).
to run front end part you can switch to CognizantDemo\wwwroot\js\lit-elements\warehouse-app directory and run the command:  npm run start:build.
Alternatively, if you don't have node.js installed in your machine, you can just run CognizantDemo.sln solution.it will run the two projects in the same time.
(it is set up to <Multiple Startup Projects> mode).
