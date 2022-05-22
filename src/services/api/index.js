const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    allProducts: `${API}/api/${VERSION}/products`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    postProducts: `${API}/api/${VERSION}/products`,
    putProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: (id) => `${API}/api/${VERSION}/users?limit=${id}`,
    postUser: `${API}/api/${VERSION}/users`,
    postUserIsAvailable: `${API}/api/${VERSION}/users/is-available`,
  },
  categories: {
    getCategories: (limit) => `${API}/api/${VERSION}/categories?limit=${limit}`,
    postCategories: `${API}/api/${VERSION}/categories`,
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    putCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getCategoriesProduct: (id, limit, offset) => `${API}/api/${VERSION}/categories/${id}/products?limit=${limit}&offset=${offset}`,
  },
  files: {
    postFiles: `${API}/api/${VERSION}/files/upload`,
    getFiles: (fileName) => `${API}/api/${VERSION}/files/${fileName}`,
  },
};

export default endPoints;
