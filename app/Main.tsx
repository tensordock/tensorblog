import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5
// bg-gradient-to-tr from-green-300 to-emerald-500
export default function Home({ posts }) {
  return (
    <>
      {/* <div className="shadow-2xl rounded-3xl bg-gradient-to-br from-green-300 via-emerald-500 to-blue-500">
          <div className="pt-10 pb-10 flex justify-center">
            <div className="w-10/12 h-80 bg-[url('/static/images/server-cables-cropped.png')] bg-cover bg-center">
            </div>
          </div>
        </div> */}
      <ul className="divide-y divide-white dark:divide-gray-700">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          const { slug, date, title, summary, tags } = post
          return (
            <li key={slug} className="py-8">
              <article>
                <Link
                  href={`/blog/${slug}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Read more: "${title}"`}
                >
                  <div className="space-y-2 bg-gray-100 pb-10 pl-10 pr-10 pt-10 hover:bg-gray-200 hover:text-green-500 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="pb-5 text-4xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6"></div>
                    </div>
                  </div>
                </Link>
              </article>
            </li>
          )
        })}
      </ul>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
