import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { ReactNode, } from "react";

import { SmartImage, SmartLink, Text, Column, Flex } from "@/once-ui/components";
import { CodeBlock } from "@/once-ui/modules";
import { HeadingLink } from "@/components";

import { TextProps } from "@/once-ui/interfaces";
import { SmartImageProps } from "@/once-ui/components/SmartImage";


// Server-compatible figure counter
let figureCounter = 0;

// Reset counter before rendering MDX content
function resetFigureCounter() {
  figureCounter = 0;
}

type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
  maxHeight?: string;
};

function Figure({ src, alt, caption }: FigureProps) {

  // Increment counter for each figure
  figureCounter += 1;
  
  return (
    <Column className="my-10 py-32" gap="20" horizontal="center">
      <SmartImage
        enlarge
        radius="m"
        aspectRatio="16 / 9"
        objectFit="contain"
        sizes="(max-width: 800px) 100vw, 800px" // This matches your maxWidth above
        alt={alt}
        src={src}

      />
      <Text variant="body-strong-s" onBackground="neutral-medium" align="center">
        Figure {figureCounter}: {caption || alt}
      </Text>
    </Column>
  );
}

// Enhanced Table Components
type TableProps = {
  children: ReactNode;
  className?: string;
};

function Table({ children, className = "table" }: TableProps) {
  return (
    <div className="w-full my-2 overflow-auto">
      <table className={`w-full border-collapse ${className}`}>
        {children}
      </table>
    </div>
  );
}

type TableCaptionProps = {
  children: ReactNode;
};

function TableCaption({ children }: TableCaptionProps) {
  // Use native caption element instead of Text component
  return (
    <caption className="caption-top py-2 text-sm font-medium text-center text-gray-700">
      {children}
    </caption>
  );
}

type TableHeaderProps = {
  children: ReactNode;
};

function TableHeader({ children }: TableHeaderProps) {
  return <thead className="bg-gray-100">{children}</thead>;
}

type TableBodyProps = {
  children: ReactNode;
};

function TableBody({ children }: TableBodyProps) {
  return <tbody>{children}</tbody>;
}

type TableFooterProps = {
  children: ReactNode;
};

function TableFooter({ children }: TableFooterProps) {
  return <tfoot className="bg-gray-100 font-medium">{children}</tfoot>;
}

type TableRowProps = {
  children: ReactNode;
  index?: number;
};

function TableRow({ children, index = 0 }: TableRowProps) {
  const isEven = index % 2 === 0;
  return <tr className={isEven ? "bg-gray-50" : "bg-white"}>{children}</tr>;
}

type TableHeadProps = {
  children: ReactNode;
  className?: string;
  index?: number;
};


function TableHead({ children, className = "" , index= 0 }: TableHeadProps) {
  const isEvenColumn = index % 2 === 0;
  return (
    <th className={`p-12 pl-56 text-center border-b border-gray-200 font-medium ? "bg-gray-100 text-gray-800" : "bg-gray-50 text-gray-700"} ${className}`}
    >
      {children}
    </th>
  );
}

type TableCellProps = {
  children: ReactNode;
  className?: string;
  colSpan?: number;
  index?: number; // Added index prop for column styling
  rowIndex?: number;
};

function TableCell({ children, className = "tablecell", colSpan, index = 0, rowIndex = 0  }: TableCellProps) {
  const isEvenColumn = index % 2 === 0;
  const isEvenRow = rowIndex % 2 === 0;

  // Determine background and text colors based on position
  let bgColorClass = "bg-white";
  let textColorClass = "text-gray-700";
  
  if (isEvenRow && isEvenColumn) {
    bgColorClass = "bg-gray-50";
    textColorClass = "text-gray-800";
  } else if (isEvenRow && !isEvenColumn) {
    bgColorClass = "bg-gray-100";
    textColorClass = "text-gray-700";
  } else if (!isEvenRow && isEvenColumn) {
    bgColorClass = "bg-white";
    textColorClass = "text-gray-600";
  } else {
    bgColorClass = "bg-gray-50";
    textColorClass = "text-gray-700";
  }

  return (
    <td 
      className={`p-3 border-b pl-56 border-gray-200 ${bgColorClass} ${textColorClass} ${className}`}
      colSpan={colSpan}
    >
      {children}
    </td>
  );
}

// Data-driven table for easier MDX usage
type DataTableProps = {
  data: {
    headers: string[];
    rows: string[][];
    footer?: {
      label: string;
      value: string;
      colSpan?: number;
    };
  };
  caption?: string;
};

function DataTable({ data, caption }: DataTableProps) {
  return (
    <div className="w-full my-32 overflow-auto">
      <table className="w-full border-collapse">
        {caption && (
          <caption>
            <Text variant="body-strong-s" onBackground="neutral-medium" align="center" className="mt-8">
              {caption}
            </Text>
          </caption>
        )}
        <thead className="bg-gray-100">
          <tr>
            {data.headers.map((header, index) => (
              <th key={index} className="p-12 text-left border-b border-gray-200 font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-50" : ""}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="p-12 border-b border-gray-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {data.footer && (
          <tfoot className="bg-gray-100 font-medium">
            <tr>
              <td 
                className="p-12 border-b border-gray-200" 
                colSpan={data.footer.colSpan || data.headers.length - 1}
              >
                {data.footer.label}
              </td>
              <td className="p-12 border-b border-gray-200 text-right">
                {data.footer.value}
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}


type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <SmartLink href={href} {...props}>
        {children}
      </SmartLink>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function createImage({ alt, src, ...props }: SmartImageProps & { src: string }) {
  if (!src) {
    console.error("SmartImage requires a valid 'src' property.");
    return null;
  }

  return (
    <SmartImage
      className="my-20"
      enlarge
      radius="m"
      aspectRatio="16 / 9"
      alt={alt}
      src={src}
      {...props}
    />
  );
}

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const CustomHeading = ({ children, ...props }: TextProps) => {
    const slug = slugify(children as string);
    return (
      <HeadingLink
        style={{ marginTop: "var(--static-space-24)", marginBottom: "var(--static-space-12)" }}
        level={level}
        id={slug}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  };

  CustomHeading.displayName = `Heading${level}`;

  return CustomHeading;
}

function createParagraph({ children }: TextProps) {
  return (
    <Text
      style={{ lineHeight: "175%" }}
      variant="body-default-m"
      onBackground="neutral-medium"
      marginTop="8"
      marginBottom="12"
    >
      {children}
    </Text>
  );
}

const components = {
  p: createParagraph as any,
  h1: createHeading(1) as any,
  h2: createHeading(2) as any,
  h3: createHeading(3) as any,
  h4: createHeading(4) as any,
  h5: createHeading(5) as any,
  h6: createHeading(6) as any,
  img: createImage as any,
  a: CustomLink as any,
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  DataTable, // Keep the data-driven version for convenience
  Figure,
  CodeBlock,
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  // Reset figure counter before rendering
  resetFigureCounter();

  return (
      /* @ts-ignore: Suppressing type error for MDXRemote usage */
      <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
  
  );
}
