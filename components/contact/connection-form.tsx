"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { motion } from "motion/react"
import { Send } from "lucide-react"

import { Button } from "@/components/motion/button"
import { CONTACT } from "@/lib/contact"
import { cn } from "@/lib/utils"

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

const FIELD_LABEL =
  "font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground"

const INPUT_BASE =
  "w-full rounded-lg border border-border/60 bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60 focus:bg-background/60 aria-invalid:border-destructive/60 aria-invalid:ring-2 aria-invalid:ring-destructive/20"

function ConnectionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  const onSubmit = handleSubmit((values) => {
    const subject = encodeURIComponent(
      values.subject || "Project Inquiry from dasimems.com"
    )
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`
    )
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
    reset()
  })

  return (
    <motion.form
      onSubmit={onSubmit}
      noValidate
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-6 rounded-2xl border border-border/50 bg-card p-6 md:p-8"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className={FIELD_LABEL}>
            Operative Name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
            aria-invalid={errors.name ? "true" : undefined}
            className={INPUT_BASE}
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Too short" },
            })}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className={FIELD_LABEL}>
            Return Address (Email)
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            aria-invalid={errors.email ? "true" : undefined}
            className={INPUT_BASE}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-subject" className={FIELD_LABEL}>
          Directive Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="Project Inquiry / Role Proposition"
          aria-invalid={errors.subject ? "true" : undefined}
          className={INPUT_BASE}
          {...register("subject", { required: "Subject is required" })}
        />
        {errors.subject && (
          <p className="text-xs text-destructive">{errors.subject.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className={FIELD_LABEL}>
          Transmission Payload
        </label>
        <textarea
          id="contact-message"
          rows={6}
          placeholder="Detail the parameters of your request..."
          aria-invalid={errors.message ? "true" : undefined}
          className={cn(INPUT_BASE, "resize-y leading-relaxed")}
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Tell me a bit more" },
          })}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          variant="brand"
          size="lg"
          disabled={isSubmitting}
          className="font-mono tracking-wider"
        >
          Transmit Protocol
          <Send className="size-4" />
        </Button>
      </div>
    </motion.form>
  )
}

export { ConnectionForm }
