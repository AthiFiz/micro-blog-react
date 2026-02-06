const BlogList = (props) => {

    const blog = props.blogs;
    const title = props.title;
    const handleDelte = props.handleDelte;

    return (
        <div className="blog-list">  
        <h2>{title }</h2>
            {blog.map((blog) => (
                <div className="blog-preview" key={blog.key}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default BlogList;