import { GiMeal as Icon } from 'react-icons/gi';
import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import sanityClient from 'part:@sanity/base/client'

export default async function sideBar(props) {
  console.log(props)
  const query = `count(*[_type == 'recipe'])`
  let count = await sanityClient.fetch(query)

  return S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('recipe')
        .title(`Recipes (${count})`)
        .icon(() => <Icon /> ),
      ...S.documentTypeListItems()
        .filter(item => item.getId() !== 'recipe'),
    ]);
}