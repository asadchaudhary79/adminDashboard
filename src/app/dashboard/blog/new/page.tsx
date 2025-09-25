"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  CalendarIcon,
  ImageIcon,
  X,
  Upload,
  Bold,
  Italic,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link as LinkIcon,
  Heading1,
  Heading2,
  Quote,
  Undo,
  Redo,
  Code,
} from "lucide-react";
// Removed date-fns dependency by using native date input
// removed unused cn
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function NewBlogPost() {
  const router = useRouter();
  const [date, setDate] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [activeTab, setActiveTab] = useState("write");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreviewImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/dashboard/blog");
    }, 1500);
  };

  // Rich text editor controls
  const insertTextAtCursor = useCallback((text: string) => {
    // For a real implementation, you would integrate a proper rich text editor library
    setContent((prev) => prev + text);
  }, []);

  return (
    <div className="flex flex-col p-6">
      <div className="flex items-center gap-2 mb-4">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1"
          onClick={() => router.back()}
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Blogs
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - 2/3 width on large screens */}
        <div className="lg:col-span-2">
          <Card className="bg-card/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle>Create New Blog Post</CardTitle>
              <CardDescription>
                Fill in the details below to create a new blog post for the job
                portal.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="title" className="text-base">
                    Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter blog post title"
                    className="mt-1.5 bg-background/50 text-lg font-medium"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="excerpt" className="text-base">
                    Excerpt
                  </Label>
                  <Textarea
                    id="excerpt"
                    placeholder="Short summary of the blog post..."
                    className="mt-1.5 bg-background/50 min-h-[80px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-base">Content</Label>
                  <div className="rounded-md border bg-background/50">
                    <div className="flex flex-wrap gap-0.5 p-1 border-b">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => insertTextAtCursor("**Bold Text**")}
                      >
                        <Bold className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => insertTextAtCursor("*Italic Text*")}
                      >
                        <Italic className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => insertTextAtCursor("\n# Heading 1\n")}
                      >
                        <Heading1 className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => insertTextAtCursor("\n## Heading 2\n")}
                      >
                        <Heading2 className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          insertTextAtCursor("\n- List item\n- List item\n")
                        }
                      >
                        <List className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          insertTextAtCursor("\n1. List item\n2. List item\n")
                        }
                      >
                        <ListOrdered className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => insertTextAtCursor("\n> Blockquote\n")}
                      >
                        <Quote className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          insertTextAtCursor("[Link text](https://example.com)")
                        }
                      >
                        <LinkIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          insertTextAtCursor("\n```\ncode block\n```\n")
                        }
                      >
                        <Code className="h-4 w-4" />
                      </Button>
                    </div>

                    <Tabs
                      defaultValue="write"
                      className="w-full"
                      onValueChange={setActiveTab}
                    >
                      <TabsList className="grid grid-cols-2 w-44 ml-2 my-1">
                        <TabsTrigger value="write">Write</TabsTrigger>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                      </TabsList>
                      <TabsContent value="write" className="mt-0 p-0">
                        <Textarea
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          placeholder="Write your blog content here... (Supports Markdown)"
                          className="min-h-[400px] p-3 rounded-none rounded-b-md border-0 bg-transparent resize-y focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </TabsContent>
                      <TabsContent
                        value="preview"
                        className="mt-0 prose max-w-none border-t p-4"
                      >
                        {content ? (
                          <div className="prose prose-sm sm:prose-base lg:prose-lg">
                            {/* This would be a markdown renderer in a real implementation */}
                            <p className="text-muted-foreground italic">
                              {content.length > 0
                                ? "Preview would render markdown here"
                                : "Nothing to preview"}
                            </p>
                            <pre className="p-2 bg-muted/50 rounded text-xs overflow-auto whitespace-pre-wrap">
                              {content}
                            </pre>
                          </div>
                        ) : (
                          <p className="text-muted-foreground text-center py-8">
                            No content to preview
                          </p>
                        )}
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 justify-end border-t p-4">
                <Button
                  variant="outline"
                  onClick={() => router.back()}
                  className="bg-background/50"
                  type="button"
                >
                  Cancel
                </Button>
                <Button
                  variant="outline"
                  className="bg-background/50"
                  type="button"
                >
                  Save as Draft
                </Button>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Publishing..." : "Publish Post"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>

        {/* Sidebar - 1/3 width on large screens */}
        <div className="space-y-6">
          {/* Publication Settings */}
          <Card className="bg-card/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-base">Publication Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="status" className="text-sm">
                  Status
                </Label>
                <Select>
                  <SelectTrigger className="mt-1.5 bg-background/50">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="publishDate" className="text-sm">
                  Publish Date
                </Label>
                <div className="mt-1.5">
                  <Input
                    id="publishDate"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="author" className="text-sm">
                  Author
                </Label>
                <Input
                  id="author"
                  placeholder="Author name"
                  className="mt-1.5 bg-background/50"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Featured Image */}
          <Card className="bg-card/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-base">Featured Image</CardTitle>
              <CardDescription>
                Upload an image to be shown as the blog post thumbnail
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {previewImage ? (
                <div className="relative overflow-hidden rounded-md border aspect-[16/9]">
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 z-10 bg-background/80 hover:bg-background rounded-full p-1 backdrop-blur-sm"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <Image
                    src={previewImage}
                    alt="Preview"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ) : (
                <div
                  className="border-2 border-dashed rounded-md aspect-[16/9] flex flex-col items-center justify-center p-4 bg-background/30 hover:bg-background/50 cursor-pointer transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <ImageIcon className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload featured image
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Recommended size: 1200 x 675px
                  </p>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              {!previewImage && (
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-background/50"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Choose File
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Categories and Tags */}
          <Card className="bg-card/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-base">Categories & Tags</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="category" className="text-sm">
                  Category
                </Label>
                <Select>
                  <SelectTrigger className="mt-1.5 bg-background/50">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="career">Career Advice</SelectItem>
                    <SelectItem value="industry">Industry Trends</SelectItem>
                    <SelectItem value="interviews">Interview Tips</SelectItem>
                    <SelectItem value="workplace">Workplace Culture</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="tags" className="text-sm">
                  Tags (comma separated)
                </Label>
                <Input
                  id="tags"
                  placeholder="job search, career, interview"
                  className="mt-1.5 bg-background/50"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
