<template>
  <Layout page="blogs">
    <BlogList :posts="$page.posts.edges" />
  </Layout>
</template>

<script>
import BlogList from '~/components/BlogList.vue';

export default {
  metaInfo: {
    title: 'Blogs'
  },
  components: {
    BlogList
  }
};
</script>

<page-query>
    query getAllBlogData {
        posts: allBlog {
            edges {
                node {
                    id
                    title
                    path
                    author
                    date  (format: "MMMM DD YYYY")
                    hero_image
                    content
                }
            }
        }
    }
</page-query>
