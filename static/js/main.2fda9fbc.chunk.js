(this["webpackJsonppractice-react"]=this["webpackJsonppractice-react"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(5),s=c.n(i),r=(c(11),c(3)),o=c.n(r),l=c(6),m=c(4),j=(c(13),c(14),c(15),c(0)),d=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{style:{marginLeft:"20PX",color:"white"},children:"Search results:"}),e.movies.map((function(e,t){return Object(j.jsx)("div",{className:"col-md-3",children:Object(j.jsxs)("div",{className:"image-container",children:[Object(j.jsx)("br",{}),Object(j.jsx)("img",{className:"img1",src:e.Poster,alt:"movie"}),Object(j.jsx)("h4",{style:{color:"white"},children:e.Title}),Object(j.jsx)("h5",{style:{color:"white"},children:e.Year})]})})}))]})},h=(c(17),function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"searchdiv",children:[Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"8px"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAl0lEQVQ4y83TTQqCYBSFYQcOawvpGnQqtD1dgEvI3FQKYnsovsHTtAStDyI6w8N9uf9J8t9SOZkwOaneBadar2qlW0CLoFHYKTQC2q1iCI5PzlFgtTAd6oVXo1sDZpQLr8S8BtywX3h73GMzXGN76L81pZU99HGb7jHKP7ml2VmVJEYMss+PMTfEItnPkItDzGNlUeG/1gNQx9gqKvwkpwAAAABJRU5ErkJggg=="})}),Object(j.jsx)("div",{style:{width:"400px"},children:Object(j.jsx)("input",{style:{backgroundColor:"black",color:"white",height:"40px"},className:"form-control",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Search movie here....."})})]})})}),p=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)([{Title:"Natsamrat",Year:"1977",imdbID:"tt0076759",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BYjkzZWIyZTctN2U3Ny00MDZlLTkzZTYtMTI2MWI5YTFiZWZkXkEyXkFqcGdeQXVyNTM2NTg3Nzg@._V1_SX300.jpg"},{Title:"ABCD(Any Body Can Dance)",Year:"2013",imdbID:"tt0080684",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTU3NTk0NjE5Nl5BMl5BanBnXkFtZTcwMTU2ODMwOQ@@._V1_SX300.jpg"},{Title:"Our Cartoon President",Year:"2018",imdbID:"tt0086190",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTczZWU5ZmYtMWVjMi00Yzg1LWE2ZjgtYmEzYWE3MDlmMTAzXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_SX300.jpg"},{Title:"Kala",Year:"2021",imdbID:"tt0086190",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BYzA2MGJiNzgtZTkyYy00OTg1LThiYjUtYjQwZDJmN2Q1OWJmXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg"}]),s=Object(m.a)(i,2),r=s[0],p=s[1],g=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="http://www.omdbapi.com/?s=".concat(t,"&apikey=263d22d8"),e.next=3,fetch(c);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,console.log(n),n.Search&&p(n.Search.slice(0,4));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g(c)}),[c]),Object(j.jsxs)("div",{className:"container-fluid movie-app",children:[Object(j.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(j.jsx)(h,{searchValue:c,setSearchValue:n})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)(d,{movies:r})})]})};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.2fda9fbc.chunk.js.map