import Sidebar from "@/components/Sidebar";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isAdmin = true;
  return (
    <html lang="en">
      <head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.3.0/chart.min.js"
          integrity="sha512-mlz/Fs1VtBou2TrUkGzX4VoGvybkD9nkeXWJm3rle0DPHssYYx4j+8kIS15T78ttGfmOjH0lLaBXGcShaVkdkg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
      </head>
      {
        isAdmin? (
          <body className="flex h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-50">
          <Sidebar />
          <div className="h-screen w-full overflow-y-scroll p-3">
          {children}
          </div>
        </body>
        ) : 
        <body className="h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <Navbar/>
           {children}
        </body>
      }
    </html>
  );
}
