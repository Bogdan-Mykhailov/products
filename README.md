# Products Catalog Application

This is a simple product catalog application built with Next.js 14 and Material-UI (MUI). The application features a product catalog with pagination, individual product pages, and a dynamically generated sitemap. It uses server-side rendering (SSR) and static site generation (SSG) for optimal performance.

![Screenshot 2024-06-13 at 11 53 27](https://github.com/Bogdan-Mykhailov/products/assets/91826635/e2e482e5-9e5f-4d22-b964-936d37a08670)

_________
![Screenshot 2024-06-13 at 11 54 18](https://github.com/Bogdan-Mykhailov/products/assets/91826635/e483f934-5ee9-4434-9258-2ed4b6ba2583)

## Features

1. **Next.js with App Router**: Utilizes the latest Next.js features with the App Router.
2. **Material-UI Integration**: Styled using Material-UI for a modern and responsive design.
3. **API Endpoints**:
   - `GET /api/products`: Fetches a paginated list of products.
   - `GET /api/products/:id`: Fetches a product by its ID.
4. **Product Catalog**:
   - Displays a paginated list of products.
   - Keeps the page state on reload.
5. **Individual Product Pages**:
   - Each product has its own page, generated using static site generation (SSG).
   - Includes JSON-LD microdata for better SEO.
6. **Sitemap**:
   - Dynamically generated sitemap available at `/sitemap.xml`.
7. **Metadata**:
   - Each page includes relevant metadata for SEO.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bogdan-Mykhailov/products.git
   cd products
2. npm install
3. Open http://localhost:3000 with your browser to see the result.


 ### Project Structure
- /app: Contains the main application routes and components.
- /data: Contains the static data for products.
- /components: Contains the React components used in the application.
- /theme: Contains the Material-UI theme configuration.
- /types: Contains TypeScript types used in the application.


### API Endpoints

Get Products with Pagination
GET /api/products?page={page}&limit={limit}
Returns a paginated list of products.

Get Product by ID
GET /api/products/{id}
Returns a specific product by its ID.

### Pages

Home Page
Displays a catalog of products with pagination. Handles query parameters to maintain the current page on reload.

Product Page
Displays detailed information about a specific product. Uses SSG to generate static pages for each product.

Sitemap
A dynamically generated sitemap is available at /sitemap.xml.
_________

#### Contributions are welcome! Please open an issue or submit a pull request.

### License
This project is licensed under the MIT License.
