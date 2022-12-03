import styled from "styled-components";


/** Empty Pages */

/** Обертка для пустой страницы из навигации */
export const EmptyPageWrapper = styled.div`
    padding: 30px;
`

/** Заголовкок  */
export const EmptyPageTitle = styled.h1<{isError?: boolean}>`
    font-size: 72px;
    font-weight: 700;
    color: ${({theme, isError}) => isError ? theme.colors.danger : theme.colors.contrast};
`
