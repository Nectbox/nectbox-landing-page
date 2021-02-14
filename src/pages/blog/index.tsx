import * as React from 'react';
import SEO from '../../components/seo';
import DefaultLayout from '../../layouts/default';
import { PageProps } from 'gatsby';

const BlogPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout>
      <SEO pathname={location.pathname} title='Blog' />
      hello
    </DefaultLayout>
  );
};

export default BlogPage;