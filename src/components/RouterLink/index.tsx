import { Link } from 'react-router';

type RouterLink = {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<'a'>;

export function RouterLink({ href, children, ...props }: RouterLink) {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}
