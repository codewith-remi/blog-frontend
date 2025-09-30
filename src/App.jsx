import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import PrivateRoute from "./routes/PrivateRoute";
import UserProvider from "./Context/UserContext";
import AdminLogin from "./Pages/Admin/AdminLogin";
import Dashboard from "./Pages/Admin/Dashboard";
import BlogPosts from "./Pages/Admin/BlogPosts";
import Comments from "./Pages/Admin/Comments";
import BlogPostEditor from "./Pages/Admin/BlogPostEditor";
import BlogLandingPage from "./Pages/Blog/BlogLandingPage";
import BlogPostView from "./Pages/Blog/BlogPostView";
import PostByTags from "./Pages/Blog/PostByTags";
import SearchPosts from "./Pages/Blog/SearchPosts";
import AboutUs from "./Pages/Blog/AboutUs";
import ContactUs from "./Pages/Blog/ContactUs";

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            {/* Default Route */}
            <Route path="/" element={<BlogLandingPage />} />
            <Route path="/:slug" element={<BlogPostView />} />
            <Route path="/tag/:tagName" element={<PostByTags />} />
            <Route path="/search" element={<SearchPosts />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* Admin Route */}
            <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/posts" element={<BlogPosts />} />
              <Route path="/admin/create" element={<BlogPostEditor />} />
              <Route path="/admin/edit/:postSlug" element={<BlogPostEditor isEdit={true} />} />
              <Route path="/admin/comments" element={<Comments />} />
            </Route>


            <Route path="/admin-login" element={<AdminLogin />} />
          </Routes>
        </Router>

        <Toaster 
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px",
            },
          }} 
        />
      </div>
    </UserProvider>
  );
};

export default App;
