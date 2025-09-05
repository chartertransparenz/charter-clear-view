import { useEffect } from 'react';

interface OrganizationData {
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface StructuredDataProps {
  organization?: OrganizationData;
  breadcrumbs?: BreadcrumbItem[];
  faqData?: Array<{
    question: string;
    answer: string;
  }>;
}

export const StructuredData = ({ organization, breadcrumbs, faqData }: StructuredDataProps) => {
  useEffect(() => {
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    });

    const scripts: any[] = [];

    // Organization Schema
    if (organization) {
      const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": organization.name,
        "description": organization.description,
        "url": organization.url,
        "logo": organization.logo,
        "sameAs": [
          "https://www.facebook.com/chartertransparenz",
          "https://www.instagram.com/chartertransparenz"
        ]
      };

      if (organization.contactPoint) {
        orgSchema["contactPoint"] = {
          "@type": "ContactPoint",
          "telephone": organization.contactPoint.telephone,
          "contactType": organization.contactPoint.contactType
        };
      }

      scripts.push(orgSchema);
    }

    // Breadcrumb Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };
      scripts.push(breadcrumbSchema);
    }

    // FAQ Schema
    if (faqData && faqData.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
      scripts.push(faqSchema);
    }

    // Add all scripts to document head
    const addedScripts: HTMLScriptElement[] = [];
    scripts.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      addedScripts.push(script);
    });

    // Cleanup function
    return () => {
      addedScripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [organization, breadcrumbs, faqData]);

  return null; // This component doesn't render anything
};