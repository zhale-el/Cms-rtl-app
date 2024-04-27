import Home from "./pages/home/Home";
import CourseInfo from "./pages/courseinfo/CourseInfo";
import Category from "./pages/category/Category";
import ArticleInfo from "./pages/articleinfo/ArticleInfo";
let routes = [
  { path: "/", element: <Home /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/category-info/:categoryName", element: <Category /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
];

export default routes;
