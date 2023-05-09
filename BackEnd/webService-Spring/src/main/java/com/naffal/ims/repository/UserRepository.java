package com.naffal.ims.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.naffal.ims.model.User;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> { // Or, itemDao

    Optional<User> findByUserName(String userName);
    Boolean existsByUserName(String userName);
    Boolean existsByPhoneNo(Long phoneNo);

}
