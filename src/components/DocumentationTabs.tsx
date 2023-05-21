'use client';
import { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/Tabs';
import SimpleBar from 'simplebar-react';
import Code from '@/components/Code';
import { nodejs, python } from '@/helpers/documentation-code';
import 'simplebar-react/dist/simplebar.min.css';


const DocumentationTabs: FC = () => {
  return <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
    <TabsList>
      <TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
      <TabsTrigger value='python'>Python</TabsTrigger>
    </TabsList>
    <TabsContent value='nodejs'>
      <SimpleBar forceVisible='y'>
        <Code animated language='javascript' code={nodejs} show></Code>
      </SimpleBar>
    </TabsContent>
    <TabsContent value='python'>
      <SimpleBar forceVisible='y'>
        <Code animated language='python' code={python} show></Code>
      </SimpleBar>
    </TabsContent>
  </Tabs>;
};

export default DocumentationTabs;