/**
 * @description
 *
 * api 코드의 모듈화를 위한 폴더입니다.
 *
 * /endpoint/{endpoint}/index.ts
 * apis,keys,mutations,queries를 named export
 * ```ts
 * export * from './apis'
 * export * from './keys'
 * export * from './mutations'
 * export * from './queries'
 * ```
 *
 * /endpoint/{endpoint}/keys.ts
 * 뮤테이션,쿼리에 사용하는 키
 * ```ts
 * export const QUERY_KEYS = {
 *   all: () => ["user"],
 *   user: (id: number) => [...QUERY_KEYS.all, id],
 * }
 * ```
 *
 * /endpoint/{endpoint}/apis.ts
 * 뮤테이션,쿼리에 사용하는 api 또는 개별적으로 사용하는 api
 * ```ts
 * const getTodos = async () => {
 *   return get(`/server/todos`)
 * }
 * ```
 *
 * /endpoint/{endpoint}/mutations.ts
 * query state를 업데이트하는 코드
 * ```ts
 * export useDeleteTodo = () => {
 *   return useMutation({
 *     mutationFn: () => deleteTodo()
 *   })
 * }
 * ```
 *
 * /endpoint/{endpoint}/queries.ts
 * ```ts
 * export useTodos = () => {
 *   return useQuery({
 *     queryKey: QUERY_KEYS.all(),
 *     queryFn: () => getTodo()
 *   })
 * }
 * ```
 */

export {};
