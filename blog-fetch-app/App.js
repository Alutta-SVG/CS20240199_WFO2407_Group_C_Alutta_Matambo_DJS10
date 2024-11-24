const App = () => {
    const [posts, setPosts] = useState([]); // To store fetched posts
    const [error, setError] = useState(null); // To store error messages
    const [loading, setLoading] = useState(true); // To indicate loading
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
              throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            const data = await response.json();
            setPosts(data);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
        
    }
)} 