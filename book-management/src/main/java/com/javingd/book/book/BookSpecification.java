package com.javingd.book.book;

import org.springframework.data.jpa.domain.Specification;

public class BookSpecification {

    public static Specification<Book> withOwnerId(int ownerId) {
        return (root, query, cb) -> cb.equal(root.get("owner").get("id"), ownerId);
    };
}
