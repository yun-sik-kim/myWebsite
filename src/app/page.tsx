import { connectDB } from "@/../util/database"
import styles from "./CSS/page.module.css"
import MainPage from "@/app/Model/MainPage";

export default async function BlogHome() {
    const client = await connectDB; // !!! DB in/output code must be written inside server component only. (user can read in client component)
    const db = client.db("blog");
    let posts = await db.collection('post').find().sort({ date: -1 }).toArray();
    let plainPosts = posts.map((post)=>{
      return(
        {
          id: post._id.toString(),
          postNo: post.postNo,
          category: post.category,
          title: post.title,
          subTitle: post.subTitle,
          date: post.date,
          tags: post.tags,
          context: post.context,
        })
    });
    
    let categories = await db.collection('categoryList').find().toArray();
    let plainCategories = categories.map((category)=>{
      return(
        {
          id: category._id.toString(),
          categoryName: category.categoryName,
          imgUrl: category.imgUrl
        })
    });

    // Separate 'all' from the rest of the categories
    let allCategory = plainCategories.filter(category => category.categoryName === 'all');
    let otherCategories = plainCategories.filter(category => category.categoryName !== 'all');
    // Sort the other categories alphabetically
    otherCategories.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
    // Combine 'all' with the sorted categories
    let sortedCategories = allCategory.concat(otherCategories);
    // console.log(sortedCategories[1].id);

    return (
      <>
        <MainPage categories={sortedCategories} posts={plainPosts}/>
      </>
    ) 
}