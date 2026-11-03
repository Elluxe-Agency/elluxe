"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Button } from "./button";
import { Textarea } from "./textarea";
import { useToast } from "@/hooks/use-toast";

// "successMessage": {
//     "title": "Message sent successfully!",
//     "description": "We will get in touch with you soon!"
//   },
//   "errorMessage": {
//     "title": "Something went wrong.",
//     "description": "Please try again."
//   },
//   "validation": {
//     "requiredField": "This field is required",
//     "invalidEmail": "Invalid email format",
//     "characterLimitExceeded": "Character limit exceeded"

const ContactForm = () => {
  const { toast } = useToast();

  const formSchema = z.object({
    "form-name": z.string().default("contact"),
    "bot-field": z.string().optional(),
    subject: z.string().default("Elluxe Contact Form"),
    name: z
      .string()
      .min(1, { message: "This field is required" })
      .max(50, { message: "Character limit exceeded" }),
    email: z
      .string()
      .email("Invalid email format")
      .min(1, { message: "This field is required" })
      .max(50, { message: "Character limit exceeded" }),
    message: z
      .string()
      .min(1, { message: "This field is required" })
      .max(5000, { message: "Character limit exceeded" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "form-name": "contact",
      "bot-field": "",
      subject: "Elluxe Contact Form",
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          const value = values[key as keyof typeof values] ?? "";
          formData.append(key, value.toString());
        }
      }
      const res = await fetch("https://elluxe.co/__forms.html", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // It was: (formData as any) for future reference
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (res.ok || res.type === "opaque") {
        form.reset();
        toast({
          title: "Message sent successfully!",
          description: "We will get in touch with you soon!",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Something went wrong.",
          description: "Please try again.",
        });
      }
    } catch (error) {
      console.log(error)
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: "Please try again.",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="space-y-7 w-full"
      >
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="form-name"
            render={({ field }) => (
              <FormItem>
                <Input type="hidden" {...field} value="contact" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bot-field"
            render={({ field }) => (
              <FormItem>
                <Input type="hidden" {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <Input type="hidden" {...field} value="Elluxe Contact Form" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="!text-white text-contact-form-label">
                  Name
                </FormLabel>
                <FormControl>
                  <div className="p-[1px] rounded-[12px] max-w-[500px] bg-contact-form-border">
                    <Input
                      className="p-3 w-full h-[59px] focus:outline-none bg-primary-black border-none py-[12px] px-[20px] rounded-[11px] !text-contact-form-text text-white"
                      placeholder="Your name"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="!text-white text-contact-form-label">
                  Email
                </FormLabel>
                <FormControl>
                  <div className="p-[1px] rounded-[12px] max-w-[500px] bg-contact-form-border">
                    <Input
                      className="p-3 w-full h-[59px] focus:outline-none bg-primary-black border-none py-[12px] px-[20px] rounded-[11px] !text-contact-form-text text-white"
                      placeholder="Your email"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="!text-white text-contact-form-label">
                  Message
                </FormLabel>
                <FormControl>
                  <div className="p-[1px] rounded-[12px] max-w-[500px] bg-contact-form-border">
                    <Textarea
                      className="p-3 w-full h-[167px] focus:outline-none bg-primary-black border-none py-[12px] px-[20px] rounded-[11px] !text-contact-form-text text-white"
                      placeholder="Your message"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button variant="default" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
