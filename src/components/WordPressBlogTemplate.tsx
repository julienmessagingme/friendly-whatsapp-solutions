
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useToast } from '@/components/ui/use-toast';

// Form validation schema
const blogPostSchema = z.object({
  title: z.string().min(5, { message: 'Le titre doit contenir au moins 5 caractères' }),
  content: z.string().min(50, { message: 'Le contenu doit contenir au moins 50 caractères' }),
  excerpt: z.string().min(10, { message: "L'extrait doit contenir au moins 10 caractères" }),
  featuredImage: z.string().optional(),
  category: z.string().min(1, { message: 'Veuillez sélectionner une catégorie' }),
  tags: z.string().optional(),
});

type BlogPostFormValues = z.infer<typeof blogPostSchema>;

const WordPressBlogTemplate = () => {
  const { toast } = useToast();
  
  const form = useForm<BlogPostFormValues>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: '',
      content: '',
      excerpt: '',
      featuredImage: '',
      category: '',
      tags: '',
    },
  });

  const onSubmit = async (data: BlogPostFormValues) => {
    try {
      // Here you would typically send the data to your WordPress API
      console.log('Blog post data:', data);
      
      // For now, just show a success message
      toast({
        title: "Article créé !",
        description: "Votre article a été créé avec succès sur WordPress.",
        duration: 5000,
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error('Error creating WordPress post:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la création de l'article.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Créer un nouvel article WordPress</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titre</FormLabel>
                <FormControl>
                  <Input placeholder="Titre de l'article" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="excerpt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Extrait</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Entrez un court extrait" 
                    className="h-20"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contenu</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Contenu de l'article..." 
                    className="min-h-[200px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="featuredImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image à la une (URL)</FormLabel>
                <FormControl>
                  <Input placeholder="https://exemple.com/image.jpg" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Catégorie</FormLabel>
                <FormControl>
                  <Input placeholder="Catégorie de l'article" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags (séparés par des virgules)</FormLabel>
                <FormControl>
                  <Input placeholder="tag1, tag2, tag3" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full bg-mairie-600 hover:bg-mairie-700">
            Publier l'article
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default WordPressBlogTemplate;
